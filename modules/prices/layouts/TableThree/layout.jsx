import { TableThreeDesktop } from './TableThreeDesktop'
import { TableThreeMobile } from './TableThreeMobile'
import { useWindowSize } from '/hook'

export const TableThree = () => {
    const windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width > 577) ? < TableThreeDesktop />
                    : (windowSize.width <= 577) ? <TableThreeMobile />
                        : ''
            }
        </>
    )
}