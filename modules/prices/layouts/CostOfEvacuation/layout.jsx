import { useContext } from 'react'

import { PriceContext } from '/contexts'
import style from './style.module.scss'
import { useWindowSize } from '/hook'

export const CostOfEvacuation = () => {
    const { THE_COST_OF_EVACUATION: { TITLE, TITLE_MOBILE, CONTENT } } = useContext(PriceContext)
    const { THE_COST_OF_TIRE_REPAIR } = useContext(PriceContext)
    const windowSize = useWindowSize()
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column}>
                        <div className={style.items}>
                            <img src="/img/MainPage/whyUs/line.svg" alt="line" />
                        </div>
                        <div className={style.items}>
                            <h2>{TITLE}</h2>
                        </div>
                    </div>
                    <div className={style.column}>
                        <img src="img/Price/CostOfEvacuation/number.svg" alt="number" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <p>
                            <span>{CONTENT[0][0].CONTENT}</span>
                            <span>{CONTENT[0][1].CONTENT}</span>
                        </p>
                        <p>
                            <span>{CONTENT[1][0].CONTENT}</span>
                            <span>{CONTENT[1][1].CONTENT}</span>
                            <img src="img/MainPage/loadCapacity/zvezda.svg" alt="" />
                        </p>
                        <p>
                            {CONTENT[2][0].CONTENT}
                        </p>
                    </div>
                    <div className={style.column}>
                        <img src="img/MainPage/loadCapacity/auto.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column}>
                        <div className={style.items}>
                            <img src="/img/MainPage/whyUs/line.svg" alt="line" />
                        </div>
                        <div className={style.items}>
                            {
                                (windowSize.width <= 577) ? <h2>
                                    <p>{THE_COST_OF_TIRE_REPAIR.TITLE_MOBILE[0].TITLE}</p>
                                    <p>{THE_COST_OF_TIRE_REPAIR.TITLE_MOBILE[1].TITLE}</p>
                                </h2>
                                    : <h2>{THE_COST_OF_TIRE_REPAIR.TITLE}</h2>
                            }
                        </div>
                    </div>
                    <div className={style.column}>
                        <img src="img/MainPage/whyUs/number.svg" alt="number" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <span>{THE_COST_OF_TIRE_REPAIR.DEPARTURE[0].TITLE}</span>
                    </div>
                    <div className={style.column}>
                        <span>{THE_COST_OF_TIRE_REPAIR.DEPARTURE[1].CONTENT}</span>
                        <span className={style.spanDecoration}>{THE_COST_OF_TIRE_REPAIR.DEPARTURE[2].CONTENT}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}