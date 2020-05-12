import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import remarkSlug from 'remark-slug';
import highlight from 'remark-highlight.js';
import html from 'remark-html';
import headings from 'remark-autolink-headings';


const postsDirectory = join(process.cwd(), 'blog');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach(async field => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = (
                await remark()
                    .use(remarkSlug)
                    .use(headings)
                    .use(highlight)
                    .use(html)
                    .process(content)
            ).toString();
        }

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    return slugs.map(slug => getPostBySlug(slug, fields));
}