import Head from 'next/head'
import Link from 'next/link'
import {GetStaticProps} from 'next';
import utilStyles from '../styles/utils.module.css'
import PostUtil from '@lib/postUtil';

import Date from '@/base/date';

type Props = {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/post/[id]" as={`/post/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      allPostsData: PostUtil.getSortedPostsData()
    }
  }
};
