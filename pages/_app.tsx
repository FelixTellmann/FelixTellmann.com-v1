import App, { AppProps } from "next/app";
import React, { FC, Fragment, CSSProperties } from "react";

import "styles/reset.css";
import "styles/typography.scss";
import "styles/theme.scss";

import { useState, useEffect } from "react";
import { Container, Spacer, Loading, Section, TextItem } from "components";

export type Props = AppProps

export type ThemeCSSProperties = CSSProperties & any

export const Root: FC<Props> = ({ pageProps, Component }) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <Loading loading={loading} width="7px" duration={3} />
      <Section padding={4}>
        <Container wrapper direction={["column", "row", "column"]}>
          <TextItem h2 h1 >asd</TextItem>
          <TextItem h3 className='welcome' style={{width: '140px'}}>asdasd</TextItem>
        </Container>
        <Spacer />
      </Section>
      {/*
        <Header >
          -Link to Logo
          -Navigation Name & Link
          -Icon Name & Link
          -CTA Link text & Action/link
        </Header>
      */}
      {/*
        <Main>
      */}
      <Component {...pageProps} />
      {/*
        </main>
      */}
      {/*
          <Footer>
           - navigation Name & Url
           - Icons name & link
           - CTA
           - Any Other info
          </Footer
          */}
    </>
  );
};

/*Layout.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};*/

export default Root;