import { useContext } from 'react'

import style from './style.module.scss'
import { HomeContext } from '/contexts'

export const WhyUs = () => {
    const {
        MAIN_SECTION,
        WHY_US
    } = useContext(HomeContext)
    return (
        <section id="whyUs">
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.column}>
                        <p>{MAIN_SECTION.CONTENT[1][0].TITLE}</p>
                        <p className={style.border}>{MAIN_SECTION.CONTENT[1][1].CONTENT}</p>
                    </div>
                    <div className={style.column}>
                        <p>{MAIN_SECTION.CONTENT[2][0].TITLE}</p>
                        <p className={style.border}>{MAIN_SECTION.CONTENT[2][1].CONTENT}</p>
                    </div>
                    <div className={style.column}>
                        <p>{MAIN_SECTION.CONTENT[3][0].TITLE}</p>
                        <p>{MAIN_SECTION.CONTENT[3][1].CONTENT}</p>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.column}>
                            <img src="/img/MainPage/whyUs/line.svg" alt="line" />
                            <h2>{WHY_US.TITLE}</h2>
                        </div>
                        <div className={style.column}>
                            <img src="/img/MainPage/whyUs/number.svg" alt="line" />
                        </div>
                    </div>
                    <div className={style.row}>
                        <div className={style.column}>
                            <div className={style.items}>
                                <h2>{WHY_US.CONTENT[0][0].TITLE}</h2>
                                <p>
                                    <span>{'—'}</span>
                                    <span>{WHY_US.CONTENT[0][1].CONTENT}</span>
                                </p>
                                <p>
                                    <span>{'—'}</span>
                                    <span>{WHY_US.CONTENT[0][2].CONTENT}</span>
                                </p>
                                <p>
                                    <span>{'—'}</span>
                                    <span>{WHY_US.CONTENT[0][3].CONTENT}</span>
                                </p>
                                <p>
                                    <span>{'—'}</span>
                                    <span>{WHY_US.CONTENT[0][4].CONTENT}</span>
                                </p>
                            </div>
                            <div className={style.items}>
                                <img src="/img/MainPage/whyUs/tros.png" alt="tros" />
                            </div>
                            <div className={style.items}>
                                <picture>
                                    <source srcSet="/img/MainPage/whyUs/evacuate.svg" media="(min-width: 993px)" />
                                    <source srcSet="/img/MainPage/whyUs/evacuateTablet.svg" media="(max-width: 992px)" />
                                    <img src="/img/MainPage/whyUs/evacuate.svg" alt="evacuate" />
                                </picture>
                            </div>
                        </div>
                        <div className={style.column}>
                            <p>{WHY_US.CONTENT[1][0].CONTENT}</p>
                        </div>
                        <div className={style.column}>
                            <div className={style.items}>
                                <p>{WHY_US.CONTENT[2][0].CONTENT}</p>
                                <p>{WHY_US.CONTENT[2][1].CONTENT}</p>
                            </div>
                            <div className={style.items}>
                                <img src="/img/MainPage/whyUs/exclamationMark.svg" alt="exclamationMark" />
                            </div>

                        </div>
                        <div className={style.column}>
                            <img src="/img/MainPage/whyUs/shinomontajTablet.png" className={style.backShinomontaj} alt="shinomontaj" />
                            <div className={style.items}>
                                <h2>{WHY_US.CONTENT[3][0].TITLE}</h2>
                                <p>
                                    <span>{'—'}</span>
                                    <span>{WHY_US.CONTENT[3][1].CONTENT}</span>
                                </p>
                                <p>
                                    <span>{'—'}</span>
                                    <span>{WHY_US.CONTENT[3][2].CONTENT}</span>
                                </p>
                                <p>
                                    <span>{'—'}</span>
                                    <span>{WHY_US.CONTENT[3][3].CONTENT}</span>
                                </p>
                                <p>
                                    <span>{'—'}</span>
                                    <span>{WHY_US.CONTENT[3][4].CONTENT}</span>
                                </p>
                            </div>
                            <div className={style.items}>
                                <picture>
                                    <source srcSet="/img/MainPage/whyUs/wheels.png" media="(min-width: 993px)" />
                                    <source srcSet="/img/MainPage/whyUs/wheelsTablet.png" media="(max-width: 992px)" />
                                    <img src="/img/MainPage/whyUs/wheels.png" alt="wheels" />
                                </picture>
                            </div>
                            <div className={style.items}>
                                <img src="/img/MainPage/whyUs/shinomontaj.svg" alt="shinomontaj" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}