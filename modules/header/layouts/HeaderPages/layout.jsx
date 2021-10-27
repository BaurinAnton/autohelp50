import Link from 'next/link'
import { useContext } from "react";

import { HomeContext } from '/contexts'
import style from './style.module.scss'

export const HeaderPages = () => {
    const { HEADER: { NAV_LINKS } } = useContext(HomeContext)
    const navText = NAV_LINKS.map((nav) => (
        <li key={nav.id}>
            <Link href={nav.HREF}>
                <a className={style.link}>{nav.name}</a>
            </Link>
        </li>
    ))
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.column}>
                    <Link href="/">
                        <a>
                            <img src="/img/Header/logoFixed.svg" alt="logo" />
                        </a>
                    </Link>
                </div>
                <div className={style.column}>
                    <ul>
                        {navText}
                    </ul>
                </div>
            </div>
        </header>
    )
}