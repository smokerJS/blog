import Head from 'next/head';
import Header from '@/layout/header';
import Navigation from '@/layout/navigation';
import Background from '@/layout/background';
import Footer from '@/layout/footer';

export interface LayoutProps  { 
    children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                {/* <meta
                property="og:image"
                content={`https://og-image.now.sh/${encodeURI(
                    
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                /> */}
                <meta name="og:title" content="후론투엔두" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header/>
            <Navigation/>
            <main>{children}</main>
            <Background/>
            <Footer/>
        </>
    );
}