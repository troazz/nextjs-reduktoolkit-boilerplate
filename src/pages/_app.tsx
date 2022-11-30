import "@styles/index.scss"
import { FC } from "react"
import type { AppProps } from "next/app"
import { wrapper } from "@store/configureStore"
import NextNprogress from "nextjs-progressbar"

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <NextNprogress
      color="#AE111B"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
    <Component {...pageProps} />
  </>
)

export default wrapper.withRedux(App)
