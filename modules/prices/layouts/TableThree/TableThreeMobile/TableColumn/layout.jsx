import style from './style.module.scss'

export const TableColumn = ({ table }) => {
    const Table = table.map((list) => (
        <div className={style.column} key={list.id}>
            {list.CONTENT}
        </div>
    ))
    return (
        <div className={style.table}>
            {Table}
        </div>
    )
}