import {
    SwiperDesktop,
    SwiperTablet,
    SwiperMobile
} from './components'
import { useWindowSize } from '/hook'

export const SwiperUI = ({ imagesSwiper }) => {
    let  windowSize = useWindowSize()
    return (
        <>
            {
                (windowSize.width >= 992) ? <SwiperDesktop imagesSwiper={imagesSwiper} />
                    : ((windowSize.width >= 578) && (windowSize.width < 992)) ? <SwiperTablet imagesSwiper={imagesSwiper} />
                        : (windowSize.width < 577) ? <SwiperMobile imagesSwiper={imagesSwiper} />
                            : ''
            }
        </>
    );
};