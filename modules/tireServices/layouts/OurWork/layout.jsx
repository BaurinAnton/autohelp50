import { useContext } from 'react'

import { HomeContext } from '/contexts'
import { SwiperUI } from '/ui'
import style from './style.module.scss'

const imagesSwiper = [
    {id: 1, src:'/img/TireService/photoOne.jpg', alt: 'auto'},
    {id: 2, src:'/img/TireService/photoTo.jpg', alt: 'auto'},
    {id: 3, src:'/img/TireService/photoThree.jpg', alt: 'auto'},
    {id: 4, src:'/img/TireService/photoFour.jpg', alt: 'auto'}
]

export const OurWork = () => {
    const { OUR_WORK: { TITLE } } = useContext(HomeContext)
    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.column}>
                    <img src="img/MainPage/whyUs/line.svg" alt="line" />
                    <h2>{TITLE}</h2>
                </div>
                <div className={style.column}>
                    <img src="img/MainPage/ourServices/number.svg" alt="number" />
                </div>
            </div>
            <div className={style.row}>
            <SwiperUI imagesSwiper={imagesSwiper} />
            </div>
        </div>
    )
}