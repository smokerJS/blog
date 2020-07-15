import React from 'react';
import { GetStaticProps } from 'next';
import PostUtil from '@lib/postUtil';
import Head from 'next/head';
import Date from '@/base/date';
import Prism from 'prismjs';
import ReactDisqusComments from 'react-disqus-comments';
import style from './style.module.scss';


export default function Post({ id, title, date, tags, contentHtml }: PostData) {
  React.useEffect(()=>{
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        {tags && <meta name="keywords" content={tags}/>}
      </Head>
      <article className={style.post_container}>
        <h1>{title}</h1>
        <div>
          <Date dateString={date} />
        </div>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: contentHtml || ''}} />
      </article>
      <section className={style.commnet_container}>
        <ReactDisqusComments shortname="smokerjs" identifier={`https://smokerjs.dev/post/${id}`} title={title}/>
      </section>
      <section>
        list
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

export const getStaticProps: GetStaticProps<PostData> = async ({params}) => {
  const postData: PostData = params?.id !== undefined && PostUtil.getPostDataById(params.id.toString()) || {
    id: '',
    title: '',
    date: '',
    tags: '',
    contentHtml: ''
  }
  return { props: postData }
}
