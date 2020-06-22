import App, { AppProps } from "next/app";
import React, { FC, Fragment, CSSProperties } from "react";
import LogoSvg from "public/logo3-28.svg";

import "styles/reset.css";
import "styles/typography.scss";
import "styles/theme.scss";

import { useState, useEffect } from "react";
import { Button, Loading } from "components";
import { Frame, Container, Spacer, Section } from "layouts";
import { Header, Logo, Nav, NavItem, SocialNav, SocialNavItem, CallToAction } from "layouts/Header";

export type Props = AppProps

export const Root: FC<Props> = ({ pageProps, Component }) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <Loading loading={loading} width="7px" duration={3} />
      <Frame>
        <Header>
          <Logo href="#home" src=""><LogoSvg /></Logo>
          <Nav>
            <NavItem href="#services" title="Services" onClick={(e) => console.log("asd")} />
            <NavItem href="#work" title="Work" />
            <NavItem href="#process" title="Process" />
            <NavItem href="#contact" title="Contact" />
          </Nav>
          <SocialNav>
            <SocialNavItem icon={`FaFacebook`} href={``} title={`Facebook`} />
            <SocialNavItem icon={`IoLogoWhatsapp`} href={``} title={`Whatsapp`} />
          </SocialNav>
          <Button href={``} onClick={(e) => console.log("asd2")} title="Get Started" size="1.5rem"/>
        </Header>
        <Component {...pageProps} />
      </Frame>
      {/*<Footer>
        <FooterNav>
          <FooterNavGroup title={`Selling Online made Easy`} responsive={["col", "col", "hidden"]}>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
          </FooterNavGroup>
          <FooterNavGroup title={`Tools`} desktopOnly>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
          </FooterNavGroup>
          <FooterNavGroup title={`Support`}>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
          </FooterNavGroup>
          <FooterNavGroup title={`Tellmann`}>
            <FooterNavItem href={``} onClick={``}>Who we are</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Sell online</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Shopify Features</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Websites</FooterNavItem>
            <FooterNavItem href={``} onClick={``}>Ecommerce Lessons</FooterNavItem>
          </FooterNavGroup>
        </FooterNav>
        
        <SocialNav footer>
          <SocialNavItem icon={``} href={``} title={``} />
          <SocialNavItem icon={``} href={``} title={``} />
        </SocialNav>
        <Text small center>We limit ourselves to a small number of active projects at a time to ensure that we can give
          each
          one focused, individual attention during their respective durations. We work on a first come, first serve
          basis and can guarantee a starting date for a project only once a deposit has been received. Deposits are
          non-refundable. We reserve the right to mark a project as inactive if there is a delay of actionable feedback
          from the client for a period of at least 2 weeks. Inactive projects can be reactivated if the client comes
          back with actionable feedback within 3 months of the project going inactive. Failing that, the project will
          require a new deposit in order to be reactivated.
        </Text>
        <FooterCopyrights>{`Copyright © 2017 - ${new Date(Date.now()).getFullYear()}. All rights reserved. Tellmann.`}</FooterCopyrights>
        <FooterEndNote>
          <Logo />
        </FooterEndNote>
      </Footer>*/}
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