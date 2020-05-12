import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/*<link rel="stylesheet"
                          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.0/build/styles/default.min.css" />
                    <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.0/build/highlight.min.js"></script>
                    <script>hljs.initHighlightingOnLoad();</script>*/}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;