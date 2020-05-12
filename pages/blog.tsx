import React, { useState, Fragment } from 'react';
import './blog.scss';
import { getAllPosts } from 'library/blog';
import dynamic from "next/dynamic";

import 'highlight.js/scss/atom-one-dark-reasonable.scss';


function Index({ allPosts }) {

    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    const [postBody, setPostBody] = React.useState("");
    return (
        <Fragment>/**/
            <section className="hero">
                <div className="hero__content">
                    {heroPost && <div dangerouslySetInnerHTML={{ __html: heroPost.content }} />}
                </div>
            </section>
        </Fragment>

    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'content',
    ]);

    return {
        props: { allPosts },
    };
}

export default Index;