import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import NavBar from '@/components/NavBar'
import SocialBar from '@/components/SocialBar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NavBar />
    <SocialBar/>
  <Component {...pageProps} />
  </>
}
