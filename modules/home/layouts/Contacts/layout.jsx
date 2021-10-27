import { useContext } from 'react'
import Link from 'next/link'

import { HomeContext } from '/contexts'
import style from './style.module.scss'

export const Contacts = () => {
    const { CONTACTS: { TITLE, CONTENT } } = useContext(HomeContext)
    return (
        <section id="contacts">
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
                        <img src="img/MainPage/contacts/numberEight.svg" alt="eight" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <Link href="tel:89250499962">
                            <a className={style.items}>
                                <span>{CONTENT[0][0].TEL}</span>
                                <span>{CONTENT[0][1].CONTENT}</span>
                            </a>
                        </Link>
                        <Link href="tel:89190826895">
                            <a className={style.items}>
                                <span>{CONTENT[1][0].TEL}</span>
                                <span>{CONTENT[1][1].CONTENT}</span>
                            </a>
                        </Link>
                    </div>
                    <div className={style.column}>
                        <Link href="https://t.me/autohelp50">
                            <a className={style.items}>
                                <img src="img/MainPage/contacts/telegram.svg" alt="telegram" />
                                <p>{CONTENT[2][0].CONTENT}</p>
                            </a>
                        </Link>
                        <Link href="https://wa.me/qr/JFTGGKKYMDGEN1">
                            <a className={style.items}>
                                <img src="img/MainPage/contacts/whatsapp.svg" alt="whatsapp" />
                                <p>{CONTENT[2][1].CONTENT}</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}