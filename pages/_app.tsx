import { AppProps } from "next/app";
import Layout from '@/layout';
import '@style/global.scss';
import '@style/github_markdown.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;