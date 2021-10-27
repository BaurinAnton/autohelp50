import style from './style.module.scss'

export const ButtonMenu = () => {
    return (
        <div className={style.menu}>
            <div className={style.burger}>
                <span className={style.line}></span>
                <span className={style.line}></span>
                <span className={style.line}></span>
            </div>
            <span className={style.text}>{'Меню'}</span>
        </div>
    )
}