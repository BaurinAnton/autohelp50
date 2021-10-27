import Head from 'next/head'

import {
  MainSection,
  WhyUs,
  OurServices,
  LoadCapacity,
  WhereWeWork,
  TireService,
  OurWork,
  Contacts,
} from '/modules/home'
import { Footer } from '/modules/footer'
import { HOME_CONSTANT, HomeContext, FOOTER_CONSTANT, FooterContext } from '/contexts'

const RootPage = () => {
  return (
    <>
      <Head>
        <title>Услуги эвакуации и шиномонтажа | Автопомощь</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Быстрая и качественная эвакуация по МО и Тульской области. Услуги шиномонтажа. Оперативная доставка в сервис. Низкая стоимость. Любой способ оплаты." />
        <meta name="keywords" content="эвакуатор, эвакуатор москва, эвакуатор дешево, эвакуатор недорого, вызвать эвакуатор, вызвать эвакуатор, эвакуатор телефон, эвакуатор машин, эвакуатор круглосуточно, услуги эвакуатора, эвакуатор область, заказать эвакуатор, эвакуатор москва дешево, номер эвакуатора, эвакуатор автомобилей, эвакуатор быстро, вызов эвакуатора" />
      </Head>
      <HomeContext.Provider value={HOME_CONSTANT}>
        <main>
          <MainSection />
          <WhyUs />
          <OurServices />
          <LoadCapacity />
          <WhereWeWork />
          <TireService imageNumber={'img/MainPage/tireService/numberSix.svg'} />
          <OurWork />
          <Contacts />
        </main>
        <FooterContext.Provider value={FOOTER_CONSTANT}>
          <Footer />
        </FooterContext.Provider>
      </HomeContext.Provider>
    </>
  )
}

export default RootPage