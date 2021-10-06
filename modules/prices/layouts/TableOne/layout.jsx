import { TableOneDesktop } from './TableOneDesktop'
import { TableOneMobile } from './TableOneMobile'
import { useWindowSize } from '/hook'

export const TableOne = () => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 577) ? < TableOneDesktop />
                    : (windowSize.width <= 577) ? <TableOneMobile />
                        : ''
            }
        </>
    )
}