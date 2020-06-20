import App, { AppProps } from "next/app";
import React, { FC, Fragment, CSSProperties } from "react";

import "styles/reset.css";
import "styles/typography.scss";
import "styles/theme.scss";

import { useState, useEffect } from "react";
import { Layout, Container, Spacer, Loading, Section, Text, Typed } from "components";

export type Props = AppProps

export const Root: FC<Props> = ({ pageProps, Component }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Layout theme={'light'} loading={false}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
/*
Root.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};*/

export default Root;