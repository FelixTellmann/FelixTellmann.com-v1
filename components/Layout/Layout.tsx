import React, { FC, useEffect, useState, useRef } from "react";
import { Button,  Loading,  Text, Typed } from "components";
import Link from "next/link";
import Logo from "public/logo-new.svg";
import { FaFacebookF, FaGithub, FaRegLightbulb } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useGlobalEvent, useMouseEvents } from "beautiful-react-hooks";
import "./Layout.scss";
import { Header } from "components/Layout/Header";

type ThemeProps = {
  theme: "light" | "dark"
  loading: boolean
}
const header = {
  logo: {
    src: '/logo3-28.svg',
    link: '#home',
  },
  navItems: [
    {
      link: '#portfolio',
      title: 'Portfolio',
    },
    {
      link: '#contact',
      title: 'Contact',
    },
  ],
  icons: [
    {
      link: '//wa.me/27763934356?text=Hi%2C%20I%27m%20interested%20in%20your%20product.',
      src: 'IoLogoWhatsapp',
    },
  ],
  
};
export const Layout: FC<ThemeProps> = ({ children, loading }) => {
  
  return (
    <div className="layout">
      
      <div className="layout__frame">
        <Header data={header}/>
        {children}
      </div>
      
      <Section spacing={2} className="footer" id="footer" background={"#323232"}>
        <Container wrapper>
          {/*<Nav />
          <SocialNav />
          <SignUp />
          <Copyright />*/}
        </Container>
      </Section>
    </div>
  );
};