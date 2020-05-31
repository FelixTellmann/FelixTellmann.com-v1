import React, { useState, useRef, Fragment, useEffect } from 'react';
import './blog.scss';
import 'highlight.js/scss/monokai.scss';


function Index({ allPosts }) {
    let innerhtml = useRef();

/*    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);*/
    const [postBody, setPostBody] = React.useState("");

    return (
        <section className="blog">
            <div className="blog__content">
               {/* {heroPost && <div ref={innerhtml} dangerouslySetInnerHTML={{ __html: heroPost.content }} />}
                <div>
                    etc

                </div>*/}
            </div>
        </section>
    );
}
/*

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
*/

export default Index;