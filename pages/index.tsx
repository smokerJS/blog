import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import PostUtil from '@lib/postUtil';

import Date from '@/base/date';

import style from './index.module.scss';

type Props = {
  allPostsData: PostData[] | null;
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <section className={style.index_container}>
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
