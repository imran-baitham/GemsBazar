import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Hydrated>
      <Component {...pageProps} />
    </Hydrated>
  )
}

const Hydrated = ({children}) => {
  const [hydration, setHydration] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])
  return hydration ? children : <div></div>
}

export default MyApp
