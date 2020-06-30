import { AppProps } from "next/app";

import '../styles/global.css'
import Layout from '../layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;