import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import showdown from 'showdown';

export default class PostUtil {
    static readonly POST_DIRECTORY: string = path.join(process.cwd(), 'public/posts');

    static getSortedPostsData(): PostData[] | null {
        try {
            const allPostsData: PostData[] = [];
            const posts: Array<string> = fs.readdirSync(this.POST_DIRECTORY).filter((x: string) => !isNaN(Number(x)));
            posts.forEach(post => {
                try {
                    const fullPath = path.join(this.POST_DIRECTORY, `${post}/index.md`);
                    const fileContents = fs.readFileSync(fullPath, 'utf8');
                    const data = matter(fileContents).data;
                    allPostsData.push({
                        id: String(post),
                        title: String(data.title || ''),
                        date: String(data.date || ''),
                        tags: String(data.tags)
                    })
                } catch (error) {
                    console.error(error);
                }
            })
            return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static getAllPostIds(): {params: {id: string}}[] | null {
        try {
            const postIds: Array<string> = fs.readdirSync(this.POST_DIRECTORY);
            return postIds.map(postId => {
              return {params: {id: postId}};
            });
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static getPostDataById(id: string): PostData | null {
        try {
            const fullPath = path.join(this.POST_DIRECTORY, `${id}/index.md`);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);
            const data = matterResult.data;
            const converter = new showdown.Converter();
            return {
              id,
              title: data.title,
              date: data.date,
              tags: data.tags,
              contentHtml: converter.makeHtml(matterResult.content)
            }
        } catch (error) {
            console.error(error);
            return null;
        }

    }
}