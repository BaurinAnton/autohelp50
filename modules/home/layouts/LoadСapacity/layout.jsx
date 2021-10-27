import { useContext } from "react"

import { HomeContext } from '/contexts'
import style from "./style.module.scss"

export const LoadCapacity = () => {
    const { LOAD_CAPACITY: {TITLE, CONTENT} } = useContext(HomeContext)
    return (
        <section>
            <div className={style.container}>
                <div className={style.wrapper}>
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
                            <img src="img/MainPage/loadCapacity/number.svg" alt="number" />
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
                                <img src="img/MainPage/loadCapacity/zvezda.svg" alt="zvezda" />
                            </p>
                            <p>
                                {CONTENT[2][0].CONTENT}
                            </p>
                        </div>
                        <div className={style.column}>
                            <img src="img/MainPage/loadCapacity/auto.jpg" alt="auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}