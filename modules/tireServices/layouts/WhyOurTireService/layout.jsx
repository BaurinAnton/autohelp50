import { useContext } from 'react'

import { WhyOurTireServiceContext } from '/contexts'
import style from './style.module.scss'

export const WhyOurTireService = () => {
    const { WHYOURTIRESERVICE: { TITLE, CONTENT } } = useContext(WhyOurTireServiceContext)
    return (
        <section>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column}>
                        <img src="img/MainPage/whyUs/line.svg" alt="line" />
                        <h2>{TITLE}</h2>
                    </div>
                    <div className={style.column}>
                        <img src="img/MainPage/whyUs/number.svg" alt="number" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <p>
                            <span>—</span>
                            <span>{CONTENT[0].CONTENT}</span>
                        </p>
                        <p><span>—</span>
                            <span>{CONTENT[1].CONTENT}</span>
                        </p>
                        <p><span>—</span>
                            <span>{CONTENT[2].CONTENT}</span>
                        </p>
                    </div>
                    <div className={style.column}>
                        <p><span>—</span>
                            <span>{CONTENT[3].CONTENT}</span>
                        </p>
                        <p><span>—</span>
                            <span>{CONTENT[4].CONTENT}</span>
                        </p>
                        <p><span>—</span>
                            <span>{CONTENT[5].CONTENT}</span>
                        </p>
                    </div>
                    <div className={style.column}>
                        <picture>
                            <source media="(min-width: 993px)" srcSet="img/TireService/service.jpg" />
                            <source media="(max-width: 992px)" srcSet="img/TireService/serviceTablet.jpg" />
                            <img src="img/TireService/service.jpg" alt="service" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}