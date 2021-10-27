import Link from 'next/link'
import { useContext, useState } from "react";

import { HomeContext } from '/contexts'
import { ButtonMenu } from './layouts'
import style from './style.module.scss'

export const HeaderMobile = () => {
    const { HEADER: { NAV_LINKS } } = useContext(HomeContext)
    const [state, setState] = useState(false);
    const navText = NAV_LINKS.map((nav) => (
        <div key={nav.id} className={style.column}>
            <Link href={nav.HREF}>
                <a onClick={() => setState(!state)}>{nav.name}</a>
            </Link>
        </div >
    ))
    return (
        <div className={style.headerMobile}>
            {
                state ? <div className={style.contentMenu}>
                    <div className={style.row}>
                        <Link href="/">
                            <a onClick={() => setState(!state)}>
                                <img src="/img/Header/logoFixed.svg" alt="logo" />
                            </a>
                        </Link>
                        {navText}
                    </div>
                </div> : ''
            }
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column} onClick={() => setState(!state)}>
                        <ButtonMenu />
                    </div>
                    <div className={style.column}>
                        <Link href={NAV_LINKS[1].HREF}>
                            <a>
                                <img src="img/Header/HeaderTablet/image_2.svg" className={style.imgOne} alt="img" />
                                <span>{NAV_LINKS[1].name}</span>
                            </a>
                        </Link>
                    </div>
                    <div className={style.column}>
                        <Link href={NAV_LINKS[4].HREF}>
                            <a>
                                <img src="img/Header/HeaderTablet/image_5.svg" className={style.imgTo} alt="img" />
                                <span>{NAV_LINKS[4].name}</span>
                            </a>
                        </Link>
                    </div>
                    <div className={style.column}>
                        <Link href={NAV_LINKS[2].HREF}>
                            <a>
                                <img src="img/Header/HeaderTablet/image_3.svg" className={style.imgThree} alt="img" />
                                <span>{NAV_LINKS[2].name}</span>
                            </a>
                        </Link>
                    </div>
                    <div className={style.column}>
                        <Link href={NAV_LINKS[6].HREF}>
                            <a>
                                <img src="img/Header/HeaderTablet/image_7.svg" className={style.imgFour} alt="img" />
                                <span>{NAV_LINKS[6].name}</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}