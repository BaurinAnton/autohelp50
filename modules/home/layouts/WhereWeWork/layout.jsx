import { useContext } from 'react'

import { HomeContext } from '/contexts'
import style from './style.module.scss'

export const WhereWeWork = () => {
    const { WHERE_WE_WORK: { TITLE, CONTENT } } = useContext(HomeContext)
    return (
        <section>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column}>
                        <img src="/img/MainPage/whyUs/line.svg" alt="line" />
                        <h2>{TITLE}</h2>
                    </div>
                    <div className={style.column}>
                        <img src="/img/MainPage/whereWeWork/number.svg" alt="number" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <div className={style.items}>
                            <h3>{CONTENT[0][0].TITLE}</h3>
                        </div>
                        <div className={style.items}>
                            <h4>{CONTENT[1][0].TITLE}</h4>
                            <p>{CONTENT[1][1].CONTENT}</p>
                            <p>{CONTENT[1][2].CONTENT}</p>
                            <p>{CONTENT[1][3].CONTENT}</p>
                            <p>{CONTENT[1][4].CONTENT}</p>
                            <p>{CONTENT[1][5].CONTENT}</p>
                            <p>{CONTENT[1][6].CONTENT}</p>
                            <p>{CONTENT[1][7].CONTENT}</p>
                        </div>
                        <div className={style.items}>
                            <h4>{CONTENT[2][0].TITLE}</h4>
                            <p>{CONTENT[2][1].CONTENT}</p>
                            <p>{CONTENT[2][2].CONTENT}</p>
                        </div>
                        <div className={style.items}>
                            <picture>
                                <source media="(min-width: 993px)" srcSet="/img/MainPage/whereWeWork/cardOne.jpg" />
                                <source media="(max-width: 992px)" srcSet="/img/MainPage/whereWeWork/cardOneTablet.jpg" />
                                <img src="/img/MainPage/whereWeWork/cardOne.jpg" alt="card one" />
                            </picture>
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.items}>
                            <h3>{CONTENT[0][1].TITLE}</h3>
                        </div>
                        <div className={style.items}>
                            <h4>{CONTENT[3][0].TITLE}</h4>
                            <p>{CONTENT[3][1].CONTENT}</p>
                            <p>{CONTENT[3][2].CONTENT}</p>
                            <p>{CONTENT[3][3].CONTENT}</p>
                            <p>{CONTENT[3][4].CONTENT}</p>
                        </div>
                        <div className={style.items}>
                            <h4>{CONTENT[4][0].TITLE}</h4>
                            <p>{CONTENT[4][1].CONTENT}</p>
                        </div>
                        <div className={style.items}>
                            <picture>
                                <source media="(min-width: 993px)" srcSet="/img/MainPage/whereWeWork/cardTo.jpg" />
                                <source media="(max-width: 992px)" srcSet="/img/MainPage/whereWeWork/cardToTablet.jpg" />
                                <img src="/img/MainPage/whereWeWork/cardOne.jpg" alt="card One" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}