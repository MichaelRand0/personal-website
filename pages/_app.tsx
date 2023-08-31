import "$styles/globals.css"
import type { AppProps } from "next/app"
import { Inter, Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}
