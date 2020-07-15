import React from 'react';
import { GetStaticProps } from 'next';
import PostUtil from '@lib/postUtil';
import Head from 'next/head';
import Date from '@/base/date';
import Prism from 'prismjs';
import ReactDisqusComments from 'react-disqus-comments';
import style from './style.module.scss';

type Post = {
  postData: PostData,
  sortedPostData: PostData[] | null
}


export default function Post({ postData, sortedPostData }: Post) {
  React.useEffect(()=>{
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>{postData.title}</title>
        {postData.tags && <meta name="keywords" content={postData.tags}/>}
      </Head>
      <article className={style.post_container}>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: postData.contentHtml || ''}} />
      </article>
      <section className={style.commnet_container}>
        <ReactDisqusComments shortname="smokerjs" identifier={`https://smokerjs.dev/post/${postData.id}`} title={postData.title}/>
      </section>
      <section>
        {
          sortedPostData?.map((obj, key) => (
            <h2 key={`post_list_${key}`}>{obj.title}</h2>
          ))
        }
      </section>
    </React.Fragment>
  );
}

export async function getStaticPaths() {
  const paths = PostUtil.getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Post> = async ({params}) => {
  const postData: PostData = params?.id !== undefined && PostUtil.getPostDataById(params.id.toString()) || {
    id: '',
    title: '',
    date: '',
    tags: '',
    contentHtml: ''
  }
  const sortedPostData = PostUtil.getSortedPostsData();
  return { props: {postData, sortedPostData} }
}
