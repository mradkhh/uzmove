import {createContext} from "react";
import type { AppProps } from 'next/app'
import Store from "store/store";
import 'styles/normalize.css'
import 'styles/index.scss'
import 'static/fonts/stylesheet.css'

interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({
  store
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Context.Provider value={{
    store
  }}>
    <Component {...pageProps} />
  </Context.Provider>
}

export default MyApp
