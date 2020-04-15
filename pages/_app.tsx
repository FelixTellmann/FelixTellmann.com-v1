import App, { AppProps } from 'next/app';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import './_app.scss';
import theme from './_theme';
import { useState } from "react";
import { Border } from "components/Border";


export type Props = AppProps

function Layout({ pageProps, Component }: Props) {
  const [isLoading, setIsloading] = useState(false);

  return (
    <div className="popup" onClick={() => setIsloading(!isLoading)}>
      <Border loading={isLoading} width="6px" duration={4}
              color={`linear-gradient(180deg, ${theme.color_accent_primary}, ${theme.color_accent_secondary})`} />
      <Component {...pageProps} />
    </div>
  );
}

Layout.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};


export default Layout;