import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styles from '@/styles/Home.module.css'
import NavLogo from '../public/images/logo_nav.png';
export default function Home() {

  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t("menu.home")}</title>
      </Head>
      <main className={
        `${styles.main} ${styles.backImage}`
      }>
        <div className='flex flex-col justify-center sm:items-center sm:mt-16 items-start'>
          <h1 className='text-secondary text-4xl sm:text-6xl font-bold mb-8 sm:mx-32  sm:text-center text-left'>
            {t("home.title")}
          </h1>
          <h3 className='sm:text-center font-semibold text-tertiary mb-8 sm:mx-[128px] mx-0 mr-20 text-base sm:text-2xl text-left'>
            {t("home.description")}
          </h3>
          <div className=''>
            <Image
              src={NavLogo}
              alt='PCL Logo'
              width={150}
              height={75}
              className='mb-8'
            />
          </div>
          <button
            className='px-16 py-4 text-2xl'>
            <Link href="/projects">{t("home.button")}</Link>
          </button>
        </div>
      </main>
    </>
  )
}
export async function getStaticProps({ locale }:{locale:string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}