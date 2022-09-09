import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SorterProvider } from '../shared/Contexts/SorterContext';
import { WindowProvider } from '../shared/Contexts/WindowContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SorterProvider>
      <WindowProvider>
        <div className="flex min-h-screen bg-black">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          <ToastContainer 
            theme='dark' 
            newestOnTop
            progressStyle={{backgroundColor: 'white'}}
            toastStyle={{ 
              backgroundColor: "#2b2828",
              fontFamily: 'Amatic SC, sans-serif',
              fontSize: '200%'
            }}
          />
        </div>
      </WindowProvider>
    </SorterProvider>
  )
}

export default MyApp
