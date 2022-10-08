import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../src/settings'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
