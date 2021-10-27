import Head from 'next/head'

import { Header } from '/modules/header'
import {
    CostOfEvacuation,
    TableOne,
    TableTo,
    TableThree,
    TableFour
} from '/modules/prices'
import { Footer } from '/modules/footer'
import {
    HOME_CONSTANT,
    HomeContext,
    FOOTER_CONSTANT,
    FooterContext,
    PriceContext,
    PRICE_CONSTANT
} from '/contexts'

const Prices = () => {
    return (
        <>
            <Head>
                <title>Цены на эвакуацию и шиномонтаж | Автопомощь</title>
                <meta name="description" content="Низкая стоимость. Цена на услуги эвакуаци, шиномонтажа. Работаем по МО и Тульской области. Любой способ оплаты." />
                <meta name="keywords" content="эвакуатор цена, стоимость эвакуатора, эвакуатор сколько, эвакуатор стоит, сколько стоит эвакуатор, шиномонтаж цены" />
            </Head>
            <HomeContext.Provider value={HOME_CONSTANT}>
                <Header headerOtherPage={true} />
                <PriceContext.Provider value={PRICE_CONSTANT}>
                    <CostOfEvacuation />
                    <TableOne />
                    <TableTo />
                    <TableThree />
                    <TableFour />
                </PriceContext.Provider>
                <FooterContext.Provider value={FOOTER_CONSTANT}>
                    <Footer />
                </FooterContext.Provider>
            </HomeContext.Provider>
        </>
    )
}

export default Prices