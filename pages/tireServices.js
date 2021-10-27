import Head from 'next/head'

import { WhyOurTireService, OurWork } from '/modules/tireServices'
import { TireService } from '/modules/home'
import { Header } from '/modules/header'
import {
    HOME_CONSTANT,
    HomeContext,
    FOOTER_CONSTANT,
    FooterContext,
    WHYOURTIRESERVICE_CONSTANT,
    WhyOurTireServiceContext
} from '/contexts'
import { Footer } from '/modules/footer'
import { yandexMetrica } from '/api/yandexMetrica'
import { googleAnalytics } from '/api/googleAnalytics'

const TireServices = () => {
    yandexMetrica()
    googleAnalytics()
    return (
        <>
            <Head>
                <title>Услуги шиномонтажа | Автопомощь</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Легковой, грузовой, выездной шиномотаж. Продажа б/у резины для грузовых авто. Делаем колеса с кольцами при шиномонтаже. Без очереди клиенту с трассы."/>
                <meta name="keywords" content="шиномонтаж, выездной шиномонтаж, грузовой шиномонтаж, шиномонтаж рядом, шиномонтаж круглосуточно, шиномонтаж со мной, шиномонтаж рядом со мной, шиномонтаж 24, шиномонтаж телефоны, шиномонтаж адреса, час шиномонтаж, шиномонтаж 24 часа, шиномонтаж рядом на карте, ближайший шиномонтаж, ближний шиномонтаж" />
            </Head>
            <HomeContext.Provider value={HOME_CONSTANT}>
                <Header headerOtherPage={true} />
                <TireService imageNumber={'/img/Price/CostOfEvacuation/number.svg'} />
                <WhyOurTireServiceContext.Provider value={WHYOURTIRESERVICE_CONSTANT}>
                    <WhyOurTireService />
                </WhyOurTireServiceContext.Provider>
                <OurWork />
                <FooterContext.Provider value={FOOTER_CONSTANT}>
                    <Footer />
                </FooterContext.Provider>
            </HomeContext.Provider>
        </>
    )
}
export default TireServices