import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next';
import PostUtil from '@lib/postUtil';

import Date from '@/base/date';

type Props = {
  allPostsData: PostData[] | null;
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData?.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/post/[id]" as={`/post/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
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
