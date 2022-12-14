import '../styles/globals.css'
import '../styles/react-calendar.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from '../slices';
import "reflect-metadata"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      </>
  )
}

export default MyApp