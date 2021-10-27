import { useContext } from 'react'

import style from './style.module.scss'
import { SwiperUI } from '/ui'
import { HomeContext } from '/contexts'

const imagesSwiper = [
    {id: 1, src:'/img/MainPage/ourWork/photoOne.jpg', alt: 'auto'},
    {id: 2, src:'/img/MainPage/ourWork/photoTo.jpg', alt: 'auto'},
    {id: 3, src:'/img/MainPage/ourWork/protoThree.jpg', alt: 'auto'},
    {id: 4, src:'/img/MainPage/ourWork/photoFour.jpg', alt: 'auto'},
    {id: 5, src:'/img/MainPage/ourWork/photoFive.jpg', alt: 'auto'}
]
export const OurWork = () => {
    const { OUR_WORK: { TITLE } } = useContext(HomeContext)
    return (
        <section id="ourWork">
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column}>
                        <img src="/img/MainPage/whyUs/line.svg" alt="line" />
                        <h2>{TITLE}</h2>
                    </div>
                    <div className={style.column}>
                        <img src="img/MainPage/ourWork/numberSeven.svg" alt="number" />
                    </div>
                </div>
                <div className={style.row}>
                    <SwiperUI imagesSwiper={imagesSwiper} />
                </div>
            </div>
        </section>

    )
}