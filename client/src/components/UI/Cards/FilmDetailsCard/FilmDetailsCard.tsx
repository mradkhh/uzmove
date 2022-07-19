import Image from "next/image";
import React, {FC, memo} from 'react';
import ListItem from "./ListItem";
import Reaction from "./Reaction";
import cl from './styles/FilmDetailsCard.module.scss'

interface FilmDetailsCardProps {
    name: string,
    country: string,
    date: string,
    genre: string,
    lang: string,
    duration: string,
    rating: number,
    img: any
}


const FilmDetailsCard: FC<FilmDetailsCardProps> = (props) => {
    const { name, date, country, lang, duration, genre, rating, img } = props
    return (
        <div className={[cl.Root, ' flex-start'].join('')}>
            <div className={cl.Img}>
                <Image
                    width={300}
                    height={480}
                    src={img}
                    alt={name}
                    objectFit='cover'
                    objectPosition='center'
                    placeholder='blur'
                />
            </div>
            <table className={cl.Table}>
                <tbody className={cl.Body}>
                <ListItem
                    title='Nomi'
                    text={name}
                />
                <ListItem
                    title='Davlati'
                    text={country}
                />
                <ListItem
                    title='Sana'
                    text={date}
                />
                <ListItem
                    title='Janr'
                    text={genre}
                />
                <ListItem
                    title='Tili'
                    text={lang}
                />
                <ListItem
                    title='Davomiyligi'
                    text={duration}
                />
                <Reaction
                    rating={rating}
                />
                </tbody>
            </table>
        </div>
    );
};

export default memo(FilmDetailsCard);