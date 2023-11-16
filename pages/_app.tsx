import { store } from "$redux/store"
import "$styles/globals.scss"
import type { AppProps } from "next/app"
import { Roboto } from "next/font/google"
import { Provider } from "react-redux"
import Layout from "./Layout"

const roboto = Roboto({
  weight: ["400", "300", "500", "700"],
  style: ["normal"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </Provider>
  )
}
