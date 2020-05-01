import App, { AppProps } from 'next/app';
import React, { FC, Fragment, CSSProperties } from 'react';
import 'library/reset.css';
import './_app.scss';
import { useState, useEffect } from "react";
import { Page } from "components";
import { Header } from "components/sections";

export type Props = AppProps

export type ThemeCSSProperties = CSSProperties & any

export const Layout: FC<Props> = ({ pageProps, Component }) => {
    const [loading, setLoading] = useState(false);

    const theme: ThemeCSSProperties = {
        '--color-text': '#252627', // #252627
        '--color-text-rgb': '37, 38, 39',
        '--color-background': '#fafafa', //fafafa
        '--color-background-rgb': '250, 250, 250',
        '--color-accent': '#e8472b',
        '--color-accent-rgb': '232, 71, 43',
        '--font-family': 'Inter',
        '--font-family-blog-content': "'Roboto Slab'",
        '--font-family-backup': "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', sans-serif",
        '--font-size-root': '10px',
        '--font-size-smaller': '1.2rem',
        '--font-size-p': '1.6rem',
        '--font-size-nav': '1.6rem',
        '--font-size-hero': '7.2rem', // goes with h2 as subheading
        '--font-size-h1': '6.4rem', // goes with h3 as subheading
        '--font-size-h2': '3.6rem',
        '--font-size-h3': '2.4rem',
        '--font-size-h4': '2rem',
        '--font-size-button': '1.6rem',
        '--font-weight-p': '300',
        '--font-weight-nav': '500',
        '--font-weight-headings': '700',
        '--font-weight-subheading': '300',
        '--font-weight-button': '500',
        '--font-line-height': '1.6',
        '--page-container-max-width': '120rem',
        '--section-padding': '8rem',
        '--header-height': '10rem',
        '--header-padding': '2rem',
        '--footer-padding': '2rem',
        '--spacing-1': '0.4rem',
        '--spacing-2': 'calc(var(--spacing-1) * 2)', // 8px
        '--spacing-3': 'calc(var(--spacing-1) * 3)', // 12px
        '--spacing-4': 'calc(var(--spacing-1) * 4)', // 16px
        '--spacing-5': 'calc(var(--spacing-1) * 5)', // 20px
        '--spacing-6': 'calc(var(--spacing-1) * 6)', // 24px
        '--spacing-7': 'calc(var(--spacing-1) * 7)', // 28px
        '--spacing-8': 'calc(var(--spacing-1) * 8)', // 32px
    };

    useEffect(() => {
        Object.entries(theme).forEach(([key, val]: [string, string]) => {
            document.documentElement.style.setProperty(key, val);
        });
    }, []);

    return (
        <Page loading={false}>
            <Header />
            <Component {...pageProps} />
        </Page>
    );
};

/*Layout.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};*/

export default Layout;