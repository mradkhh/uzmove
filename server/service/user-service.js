const bcrypt = require('bcrypt')
const uuid = require('uuid')
const UserDto = require('../dtos/user-dto')
const UserModel = require('../models/user-model')
const mailService = require('../service/mail-service')
const tokenService  = require('../service/token-service')
const {Error} = require("mongoose");

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email })
        if (candidate) {
            throw new Error(`${email} already authorized`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4();

        const user = await UserModel.create({ email, password: hashPassword, activationLink })
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {
            throw new Error('invalid link')
        }
        user.isActivated  = true;
        await user.save();
    }
}

module.exports = new UserService()