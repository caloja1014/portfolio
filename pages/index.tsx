import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavLogo from '../public/images/logo_nav.png';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={
        `${styles.main} ${styles.backImage}`
      }>
        <div className='flex flex-col justify-center sm:items-center sm:mt-16 items-start'>
          <h1 className='text-secondary text-4xl sm:text-6xl font-bold mb-8 sm:mx-32  sm:text-center text-left'>
            Hi, my name is Carlos Loja
          </h1>
          <h3 className='sm:text-center font-semibold text-tertiary mb-8 sm:mx-[128px] mx-0 mr-20 text-base sm:text-2xl text-left'>
          I’m a  Mobile and Full Stack Developer focused on building scalable applications according to customer requirements 
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
            <Link href="/projects">Projects</Link>
            </button>
        </div>
      </main>
    </>
  )
}
