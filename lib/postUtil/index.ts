import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import showdown from 'showdown';

type postData = {
    id: string,
    title: string | '',
    date: string | '',
    contentHtml?: string
}

export default class PostUtil {
    static readonly POST_DIRECTORY: string = path.join(process.cwd(), 'posts');

    static getSortedPostsData(): postData[] {
        const postNames: Array<string> = fs.readdirSync(this.POST_DIRECTORY);
        const allPostsData: postData[] = postNames.map(postName => {
            const id = postName.replace(/\.md$/, '');
            const fullPath = path.join(this.POST_DIRECTORY, `${id}/index.md`);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const data = matter(fileContents).data;
            return {
                id,
                title: data.title,
                date: data.date
            }
        })
        return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
    }

    static getAllPostIds(): {params: {id: string}}[] {
        const postNames: Array<string> = fs.readdirSync(this.POST_DIRECTORY);
        return postNames.map(postName => {
          return {params: {id: postName}};
        });
    }

    static getPostDataById(id: string): postData {
        const fullPath = path.join(this.POST_DIRECTORY, `${id}/index.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const data = matterResult.data;
        const converter = new showdown.Converter();
        return {
          id,
          title: data.title,
          date: data.date,
          contentHtml: converter.makeHtml(matterResult.content)
        }
    }
}