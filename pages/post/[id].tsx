import React from 'react';
import { GetStaticProps } from 'next';
import PostUtil from '@lib/postUtil';
import Head from 'next/head';
import Date from '@/base/date';

export default function Post({ title, date, contentHtml }: PostData) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <div>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml || ''}} />
      </article>
    </React.Fragment>
  )
}

export async function getStaticPaths() {
  const paths = PostUtil.getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostData> = async ({params}) => {
  const postData: PostData = params?.id !== undefined && PostUtil.getPostDataById(params.id.toString()) || {
    id: '',
    title: '',
    date: '',
    contentHtml: ''
  }
  return { props: postData }
}
