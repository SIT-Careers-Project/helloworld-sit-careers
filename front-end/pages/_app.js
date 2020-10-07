import React from 'react'
import Head from 'next/head'
import { wrapper } from '../store/store'
import '../styles/globals.css'

function WrappedApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hello Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
