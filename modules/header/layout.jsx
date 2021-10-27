import {
    HeaderMain,
    HeaderFixed,
    HeaderTablet,
    HeaderMobile,
    HeaderPages
} from "./layouts";
import { useScroll, useWindowSize } from '/hook'

export const Header = ({ headerOtherPage }) => {
    const positionScroll = useScroll()
    const windowSize = useWindowSize()
    return (
        <>
            {
                headerOtherPage ? <HeaderPages />
                    : !headerOtherPage ? <HeaderMain /> : ''
            }
            {
                ((positionScroll.height > 200) && (windowSize.width > 992)) ?
                    <HeaderFixed />
                    : ((windowSize.width > 577) && (windowSize.width <= 992)) ? <HeaderTablet />
                        : (windowSize.width <= 576) ? <HeaderMobile />
                            : ''
            }
        </>
    )
}