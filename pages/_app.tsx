<<<<<<< HEAD
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
=======
import type { AppProps } from 'next/app';
import '@/styles/App.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
>>>>>>> part3-김재성-week14-temp
}
