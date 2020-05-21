import React, { useState, useRef, Fragment, useEffect } from 'react';
import './blog.scss';
import { getAllPosts } from 'library/blog.api';
import 'highlight.js/scss/monokai.scss';
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

function Index({ allPosts }) {
    let innerhtml = useRef();

    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    const [postBody, setPostBody] = React.useState("");
    useEffect(() => {
        for (let i = 0; i < document.getElementsByTagName('code').length; i++) {
            <MonacoEditor
                editorDidMount={() => {
                    // @ts-ignore
                    window.MonacoEnvironment.getWorkerUrl = (
                        _moduleId: string,
                        label: string,
                    ) => {
                        if (label === "json")
                            return "_next/static/json.worker.js";
                        if (label === "css")
                            return "_next/static/css.worker.js";
                        if (label === "html")
                            return "_next/static/html.worker.js";
                        if (
                            label === "typescript" ||
                            label === "javascript"
                        )
                            return "_next/static/ts.worker.js";
                        return "_next/static/editor.worker.js";
                    };
                }}
                width="800"
                language="markdown"
                theme="vs-dark"
                value={document.getElementsByTagName('code')[i].innerHTML}
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
            />;
        }

    }, []);
    return (
        <section className="blog">
            <div className="blog__content">
                {heroPost && <div ref={innerhtml} dangerouslySetInnerHTML={{ __html: heroPost.content }} />}
                <div>
                    etc

                </div>
            </div>
        </section>
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