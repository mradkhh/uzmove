import React, {FC, memo} from 'react';
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import FilmDetailsCard from "components/UI/Cards/FilmDetailsCard/FilmDetailsCard";
import Container from "components/Container/Container";
import FilmCard from "components/UI/Cards/FilmCard";
import Tabs from "components/UI/Tabs/Tabs";
import Video from "components/UI/Video/Video";
import TrailerVideo from "components/UI/Video/TrailerVideo";
import Download from "components/UI/Video/Download";
import img from 'static/images/thoree.jpg';
import film1 from "static/images/teskari.jpg";
import film2 from "static/images/sumerki.jpg";
import film3 from "static/images/yirtqich.jpg";
import film4 from "static/images/jersi.jpg";
import film5 from "static/images/thoree.jpg";
import film6 from "static/images/film6.jpg";
import cl from './FilmPage.module.scss';

interface FilmPageProps {

}

const breadcrumb = [
    { path: '/', text: 'Bosh sahifa' },
    { path: '/films', text: 'Kinolar' },
]

const data = [
    {
        component: ( <FilmCard
            year='2022'
            title='Teskari voqelik'
            genre='Fantastik'
            image={film1}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Sumerki 5 - Tong otishi'
            genre='Fantastik'
            image={film2}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Yirtqich'
            genre='Fantastik'
            image={film3}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Jersi'
            genre='Fantastik'
            image={film4}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Tor 4 - sevgi va momaqaldiroq'
            genre='Fantastik'
            image={film5}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film6}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film6}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film6}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film6}
        /> )
    }
]

const FilmPage: FC<FilmPageProps> = memo(({  }) => {

    const tabs = [
        { title: "Onlayn ko'rish", content: <Video/>  },
        { title: "Treylerini ko'rish", content: <TrailerVideo/>  },
        { title: "Yuklash", content: <Download/>  },
    ]

    return (
        <>
            <Breadcrumbs array={breadcrumb} current='Film name'/>
            <Container id='film-details_card'>
                <FilmDetailsCard
                    name='Tor 4 - Muhabbat va momaqaldiroq'
                    genre='Fantastik'
                    lang="O'zbekcha"
                    duration='1:50'
                    country='AQSh'
                    date='2022'
                    rating={43}
                    img={img}
                />
                <Tabs tabs={tabs} />
            </Container>
            <FilmsCarouselLayout
                title="O'xshash"
                href="/favorites"
                data={data}
                type="slider"
                autoplay={{
                    delay: 1500
                }}
                button={false}
            />
        </>
    );
});

FilmPage.displayName = 'FilmPage'

export default FilmPage;