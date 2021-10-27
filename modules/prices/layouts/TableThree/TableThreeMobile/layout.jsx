import { useContext } from 'react'

import { PriceContext } from '/contexts'

import { TableColumn } from './TableColumn'
import { TABLE } from './constants'
import style from './style.module.scss'

export const TableThreeMobile = () => {
    const { TABLE_THREE: { TITLE } } = useContext(PriceContext)
    return (
        <>
            <div className={style.container}>
                <div className={style.row}>
                    <h3>{TITLE[0].TITLE}</h3>
                </div>
                <div className={style.row}>
                    <TableColumn table={TABLE.TABLE_ONE} />
                    <TableColumn table={TABLE.TABLE_TO} />
                    <TableColumn table={TABLE.TABLE_THREE} />
                </div>
            </div>
        </>
    )
}