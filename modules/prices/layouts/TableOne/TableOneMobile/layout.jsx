import { useContext } from 'react'

import { PriceContext } from '/contexts'
import { TableColumn } from './TableColumn'
import style from './style.module.scss'

export const TableOneMobile = () => {
    const { TABLE_ONE: { TITLE } } = useContext(PriceContext)
    return (
        <div className={style.container}>
            <div className={style.row}>
                <h3>
                    <span>{TITLE[0].TITLE}</span>
                    <span>{TITLE[1].TITLE}</span>
                </h3>
            </div>
            <div className={style.table}>
                <TableColumn content={1} title={0}/>
                <TableColumn content={2} title={0}/>
                <TableColumn content={3} title={0}/>
                <TableColumn content={4} title={0}/>
                <TableColumn content={5} title={0}/>
                <TableColumn content={6} title={0}/>
                <TableColumn content={7} title={0}/>
                <TableColumn content={8} title={0}/>
            </div>
        </div>
    )
}