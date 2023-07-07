import '@/styles/globals.css'
import Context from "../context/AnsibleContext"

export default function App({ Component, pageProps }) {


  return <Context>
    <Component {...pageProps} />
  </Context>
}
