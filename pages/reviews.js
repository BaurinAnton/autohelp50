import Head from 'next/head'

import { Header } from '/modules/header'
import { Footer } from '/modules/footer'
import { ReviewsSection } from '/modules/reviews'
import {
    HOME_CONSTANT,
    HomeContext,
    FOOTER_CONSTANT,
    FooterContext,
} from '/contexts'

const Reviews = () => (
    <>
    <Head>
      <title>Отзывы на эвакуацию и шиномонтаж| Автопомощь</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Отзывы эвакуации, шиномонтажа. Услуги эвакуации и шиномонтажа. Работаем по МО и Тульской области. Оперативная доставка в сервис."/>
      <meta name="keywords" content="эвакуатор отзывы" />
    </Head>
    <HomeContext.Provider value={HOME_CONSTANT}>
        <Header headerOtherPage={true}/>
        <ReviewsSection/>
        <FooterContext.Provider value={FOOTER_CONSTANT}>
            <Footer />
        </FooterContext.Provider>
    </HomeContext.Provider>
    </>
)

export default Reviews