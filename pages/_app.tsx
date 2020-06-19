import App, { AppProps } from "next/app";
import React, { FC, Fragment, CSSProperties } from "react";

import "styles/reset.css";
import "styles/typography.scss";
import "styles/theme.scss";

import { useState, useEffect } from "react";
import { Container, Spacer, Loading, Section, TextItem, Typed } from "components";

export type Props = AppProps

export const Root: FC<Props> = ({ pageProps, Component }) => {
  const [loading, setLoading] = useState(false);
  const content = [
    `I build beautiful <br>websites.`,
    /*`I help people <br>succeed online.`,
    `I teach &amp; write <br>about code.`,*/
  ];
  return (
    <>
      <Loading loading={loading} width="7px" duration={3} />
      <Section spacing={2} className="header" id="header">
        <Container wrapper>
          {/*<Logo />
          <Nav />
          <SocialNav />
          <Button />*/}
        </Container>
      </Section>
      <Component {...pageProps} />
      <Section spacing={2}>
        <Container wrapper className="hero__content" vcenter maxWidth={"500px"}>
          <TextItem h1>
            Hi, I'm <span className="highlight">Felix</span>. <br />
            <Typed content={content}
                   typeSpeed={40}
                   backSpeed={17}
                   backDelay={1850}/**/
                   loop
                   cursorChar={"|"} />
          </TextItem>
        </Container>
      </Section>
      <Section spacing={2} className="footer" id="footer" background={"#323232"}>
        <Container wrapper>
          {/*<Nav />
          <SocialNav />
          <SignUp />
          <Copyright />*/}
        </Container>
      </Section>
    
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