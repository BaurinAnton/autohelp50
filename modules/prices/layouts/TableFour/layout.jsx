import { TABLE } from './constants'
import style from './style.module.scss'

export const TableFour = () => {
    const Table = TABLE.TABLE_ONE.map((list) => (
        <div className={style.column} key={list.id}>
            {list.CONTENT}
        </div>
    ))
    return (
        <div className={style.container}>
            <div className={style.row}>
                <h3>{TABLE.TITLE}</h3>
            </div>
            <div className={style.row}>
                <div className={style.table}>
                    {Table}
                </div>
            </div>
        </div>
    )
}