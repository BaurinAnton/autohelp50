import Link from 'next/link'
import { useContext } from "react";

import { HomeContext } from '/contexts'
import style from './style.module.scss'

export const HeaderTablet = () => {
    const { HEADER: { NAV_LINKS } } = useContext(HomeContext)
    const navText = NAV_LINKS.map((nav) => (
        <div key={nav.id} className={style.column}>
            <Link href={nav.HREF}>
                <a>
                    <img src={`img/Header/HeaderTablet/image_${nav.id}.svg`} alt="img" />
                    <span>{nav.name}</span>
                </a>
            </Link>
        </div>
    ))
    return (
        <div className={style.headerWrapper}>
            <div className={style.container}>
                {navText}
            </div>
        </div>
    )
}