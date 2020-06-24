import React from 'react';
import PostUtil from '@lib/postUtil';
import { IPostData } from '@lib/postUtil/type';
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }: {postData: IPostData}) {
  return (
    <React.Fragment>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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

export async function getStaticProps({ params }) {
  const postData = PostUtil.getPostDataById(params.id)
  return {
    props: {
      postData
    }
  }
}
