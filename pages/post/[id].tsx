import React from 'react';
import { GetStaticProps } from 'next';
import PostUtil from '@lib/postUtil';
import Head from 'next/head';
import Link from 'next/link';
import Date from '@/base/date';
import Prism from 'prismjs';
import ReactDisqusComments from 'react-disqus-comments';
import style from './style.module.scss';

type Post = {
  postData: PostData,
  sortedPostData: PostData[] | null
}

export default function Post({ postData, sortedPostData }: Post) {
  const PAGE_LIST_SIZE = 2;
  const [postList, setPostList] = React.useState<Array<PostData[]>>([]);
  const [currPostListIndex, setCurrPostListIndex] = React.useState(0);
  React.useEffect(()=>{
    Prism.highlightAll();
    if(sortedPostData) {
      setPostList(postDataDivision(sortedPostData, PAGE_LIST_SIZE));
      setCurrPostListIndex(Math.floor((sortedPostData.length - parseInt(postData.id)) / PAGE_LIST_SIZE));
    }
  }, []);

  const postDataDivision = (postData: PostData[], length: number): Array<PostData[]> => {
    const data = postData.slice();
    const result = [];
    while(data.length) {
      result.push(data.splice(0, length));
    }
    return result;
  }

  const changePostListIndexHandler = (requestNumber: number) => {
    setCurrPostListIndex(currPostListIndex + requestNumber);
  }


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
      <section className={style.pagination_container}>
        <ul>
          <li>
            <button onClick={x => changePostListIndexHandler(-1)} disabled={currPostListIndex === 0}>prev</button>
          </li>
          {
            postList[currPostListIndex]?.map((obj, key) => (
              <li key={`post_list_${key}`}> 
                <Link href="/post/[id]" as={`/post/${obj.id}`}>
                  <a>{obj.title}</a>
                </Link>
              </li>
            ))
          }
          <li>
            <button onClick={x => changePostListIndexHandler(1)} disabled={currPostListIndex === postList.length - 1}>next</button>
          </li>
        </ul>
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
