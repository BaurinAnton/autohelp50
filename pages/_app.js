import Router from "next/router";
import withYM from "next-ym";

import "../styles/global.scss"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withYM("86131485", Router)(MyApp);
