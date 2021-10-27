import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta name="Author" content="Гуськов Александр" />
          <meta name="Copyright" content="Автопомощь." />
          <meta property="og:locale" content="ru_RU" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Услуги эвакуации и шиномонтажа | Автопомощь" />
          <meta property="og:description"
            content="Быстрая и качественная эвакуация по МО и Тульской области. Услуги шиномонтажа. Оперативная доставка в сервис. Низкая стоимость. Любой способ оплаты." />
          <meta property="og:image" content="/public/img/OpenGraph/image.png" />
          <meta property="og:url" content="https://autohelp50.ru" />
          <meta property="og:site_name" content="Услуги эвакуации и шиномонтажа | Автопомощь" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="Александр" />
          <meta property="twitter:title" content="Услуги эвакуации и шиномонтажа | Автопомощь" />
          <meta property="twitter:description"
            content="Быстрая и качественная эвакуация по МО и Тульской области. Услуги шиномонтажа. Оперативная доставка в сервис. Низкая стоимость. Любой способ оплаты." />
          <meta property="twitter:image" content="/public/img/OpenGraph/image.png" />
          <meta name="msapplication-TileColor" content="#FFA900" />
          <meta name="msapplication-TileImage" content="/public/img/OpenGraph/image.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument