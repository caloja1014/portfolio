import '@/styles/globals.css'
import { appWithTranslation } from "next-i18next";
import type { AppProps } from 'next/app'

import NavBar from '@/components/NavBar'
import SocialBar from '@/components/SocialBar'

function App({ Component, pageProps }: AppProps) {
  return <>
    <NavBar />
    <SocialBar/>
  <Component {...pageProps} />
  </>
}
export default appWithTranslation(App);
