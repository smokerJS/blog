import { Container } from 'next/app';
import '../styles/global.css'

type App = {
  Component: any,
  pageProps: {[key: string]: any}[]
}

export default function App({ Component, pageProps }: App) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}