import { useContext } from 'react'
import Link from 'next/link'

import style from './style.module.scss'
import { HomeContext } from '/contexts'

export const TireService = ({ imageNumber }) => {
    const { TIRE_SERVICES: { TITLE, CONTENT } } = useContext(HomeContext)
    return (
        <section>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column}>
                        <img src="/img/MainPage/whyUs/line.svg" alt="line" />
                        <h2>{TITLE}</h2>
                    </div>
                    <div className={style.column}>
                        <img src={imageNumber} alt="number" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <div className={style.items}>
                            <div className={style.box}>
                                <img src="img/MainPage/tireService/wheelCar.png" alt="car" />
                            </div>
                            <div className={style.box}>
                                <h3>{CONTENT[0].TITLE}</h3>
                            </div>
                        </div>
                        <div className={style.items}>
                            <img src="img/MainPage/tireService/carText.svg" alt="car" />
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.items}>
                            <div className={style.box}>
                                <img src="img/MainPage/tireService/wheelCargoCar.png" alt="car" />
                            </div>
                            <div className={style.box}>
                                <h3>{CONTENT[1].TITLE}</h3>
                            </div>
                        </div>
                        <div className={style.items}>
                            <img src="img/MainPage/tireService/cargoCarText.svg" alt="car" />
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.items}>
                            <div className={style.box}>
                                <picture>
                                    <source media="(min-width: 578px)" srcSet="img/MainPage/tireService/tools.png" />
                                    <source media="(max-width: 577px)" srcSet="img/MainPage/tireService/toolsMobile.png" />
                                    <img src="img/MainPage/tireService/tools.png" alt="tools" />
                                </picture>
                            </div>
                            <div className={style.box}>
                                <h3>{CONTENT[2].TITLE}</h3>
                            </div>
                        </div>
                        <div className={style.items}>
                            <img src="img/MainPage/tireService/tools.svg" alt="tools" />
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.items}>
                            <div className={style.box}>
                                <img src="img/MainPage/tireService/wheels.png" alt="wheels" />
                            </div>
                            <div className={style.box}>
                                <h3>{CONTENT[3].TITLE}</h3>
                            </div>
                        </div>
                        <div className={style.items}>
                            <img src="img/MainPage/tireService/wheelСargoСarBU.png" alt="cargo car" />
                            <img src="img/MainPage/tireService/BuText.svg" className={style.backgroundBu} alt="text" />
                        </div>
                    </div>
                    <div className={style.column}>{CONTENT[3].TITLE}</div>
                </div>
                <Link href="/prices">
                    <a className={style.link}>{CONTENT[4].CONTENT}</a>
                </Link>
            </div>
        </section>

    )
}