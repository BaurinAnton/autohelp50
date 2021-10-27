import { useContext } from 'react'

import { HomeContext } from '/contexts'
import style from './style.module.scss'

export const OurServices = () => {
    const { OUR_SERVICES: { TITLE, CONTENT } } = useContext(HomeContext)
    return (
        <section id="ourServices">
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.row}>
                        <div className={style.column}>
                            <img src="/img/MainPage/whyUs/line.svg" alt="line" />
                            <h2>{TITLE}</h2>
                        </div>
                        <div className={style.column}>
                            <img src="img/MainPage/ourServices/number.svg" alt="number" />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.column}>
                            <h3>{CONTENT[0][0].TITLE}</h3>
                        </div>
                        <div className={style.column}>
                            <div className={style.items}>
                                <img src="img/MainPage/ourServices/auto.png" alt="auto" />
                                <h4>{CONTENT[1][0].TITLE}</h4>
                            </div>
                            <div className={style.items}>
                                <img src="img/MainPage/ourServices/tractor.png" alt="tractor" />
                                <h4>{CONTENT[1][1].TITLE}</h4>
                            </div>
                            <div className={style.items}>
                                <img src="img/MainPage/ourServices/skating.png" alt="skating" />
                                <h4>{CONTENT[1][2].TITLE}</h4>
                            </div>
                            <div className={style.items}>
                                <img src="img/MainPage/ourServices/trailer.png" alt="trailer" />
                                <h4>{CONTENT[1][3].TITLE}</h4>
                            </div>
                            <div className={style.items}>
                                <img src="img/MainPage/ourServices/bike.png" alt="bike" />
                                <h4>{CONTENT[1][4].TITLE}</h4>
                            </div>
                            <div className={style.items}>
                                <img src="img/MainPage/ourServices/other.png" alt="other" />
                                <h4>{CONTENT[1][5].TITLE}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}