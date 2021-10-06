import Link from 'next/link'
import { useContext } from "react";

import { FooterContext } from '/contexts'
import style from "./style.module.scss"

export const Footer = () => {
    const { FOOTER: { CONTACTS, MENU, DEVELOPMENT } } = useContext(FooterContext)
    const navLink = MENU[1].NAV_LINKS.map((list) => (
        <li key={list.ID}>
            <Link href={list.HREF}>
                <a>{list.NAME}</a>
            </Link>
        </li>
    ))
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.column}>
                    <img src="/img/Footer/logo.svg" alt="logo" />
                    <div className={style.items}>
                        <Link href={CONTACTS[0].HREF}><a>{CONTACTS[0].TEL}</a></Link>
                        <Link href={CONTACTS[1].HREF}><a>{CONTACTS[1].TEL}</a></Link>
                    </div>
                    <h4>&copy;{CONTACTS[2].CONTENT}</h4>
                </div>
                <div className={style.column}>
                    <h3>{MENU[0].TITLE}</h3>
                    <ul>{navLink}</ul>
                </div>
                <div className={style.column}>
                    <h3>{DEVELOPMENT[0].TITLE}</h3>
                    <div className={style.items}>
                        <p>{DEVELOPMENT[1].CONTENT}</p>
                        <div className={style.box}>
                            <Link href='https://t.me/baurinanton'>
                                <a><img src="/img/Footer/telegram.svg" alt="telegram" /></a>
                            </Link>
                            <Link href='https://instagram.com/baurin.anton'>
                                <a><img src="/img/Footer/instagram.svg" alt="instagram" /></a>
                            </Link>
                        </div>
                    </div>
                    <div className={style.items}>
                        <p>{DEVELOPMENT[2].CONTENT}</p>
                        <div className={style.box}>
                            <Link href='https://www.behance.net/artemartemartem'>
                                <a><img src="/img/Footer/be.svg" alt="behance" /></a>
                            </Link>
                            <Link href='https://t.me/artembaurin'>
                                <a><img src="/img/Footer/telegram.svg" alt="telegram" /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}