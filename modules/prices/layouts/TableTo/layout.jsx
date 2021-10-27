import { TableToDesktop } from './TableToDesktop'
import { TableToMobile } from './TableToMobile'
import { useWindowSize } from '/hook'

export const TableTo = () => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 577) ? < TableToDesktop />
                    : (windowSize.width <= 577) ? <TableToMobile />
                        : ''
            }
        </>
    )
}