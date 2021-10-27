import { useContext } from 'react'

import { PriceContext } from '/contexts'
import style from './style.module.scss'

export const TableColumn = ({content, title}) => {
    const { TABLE_ONE: {
        COLUMN_ONE,
        COLUMN_TO,
        COLUMN_THREE,
        COLUMN_FOUR,
        COLUMN_FIVE } } = useContext(PriceContext)
    return (
        <div className={style.column}>
            <div className={style.items}>{COLUMN_ONE[title].TITLE}</div>
            <div className={style.items}>{COLUMN_ONE[content].CONTENT}</div>
            <div className={style.items}>{COLUMN_TO[title].TITLE}</div>
            <div className={style.items}>{COLUMN_TO[content].CONTENT}</div>
            <div className={style.items}>{COLUMN_THREE[title].TITLE}</div>
            <div className={style.items}>{COLUMN_THREE[content].CONTENT}</div>
            <div className={style.items}>{COLUMN_FOUR[title].TITLE}</div>
            <div className={style.items}>{COLUMN_FOUR[content].CONTENT}</div>
            <div className={style.items}>{COLUMN_FIVE[title].TITLE}</div>
            <div className={style.items}>{COLUMN_FIVE[content].CONTENT}</div>
        </div>
    )
}