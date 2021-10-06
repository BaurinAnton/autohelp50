import Link from 'next/link'
import { useContext } from 'react'

import { Header } from "/modules/shared"
import { HomeContext } from '/contexts'

import style from './style.module.scss'

export const MainSection = () => {
    const { MAIN_SECTION: { CONTENT } } = useContext(HomeContext)
    return (
        <section className={style.section}>
            <Header headerOtherPage={false} />
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column}>
                        <h1>{CONTENT[0][0].H1}</h1>
                        <h2>{CONTENT[0][1].H2}</h2>
                        <Link href="tel:89250499962">
                            <a className={style.button}>{'Заказать'}</a>
                        </Link>
                    </div>
                    <div className={style.column}>
                        <img src="/img/MainPage/mainSection/one.svg" alt="number" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <p>{CONTENT[1][0].TITLE}</p>
                        <p className={style.border}>{CONTENT[1][1].CONTENT}</p>
                    </div>
                    <div className={style.column}>
                        <p>{CONTENT[2][0].TITLE}</p>
                        <p className={style.border}>{CONTENT[2][1].CONTENT}</p>
                    </div>
                    <div className={style.column}>
                        <p>{CONTENT[3][0].TITLE}</p>
                        <p>{CONTENT[3][1].CONTENT}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}