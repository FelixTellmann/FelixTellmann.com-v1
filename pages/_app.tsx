import App, { AppProps } from 'next/app';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import 'library/reset.css';
import './_app.scss';
import './header.scss';
import { FaFacebookF, FaGithub, FaEnvelope, FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import theme from './_theme';
import { useState } from "react";
import { Border } from "components/Border";


export type Props = AppProps

function Layout({ pageProps, Component }: Props) {
  const [isLoading, setIsloading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState({
    isScrollingDown: false,
    currentScrollPosition: 0,
  });

  const setHeaderScrollClasses = ({ isScrollingDown, currentScrollPosition }) => {
    return currentScrollPosition < 150 ? '' : isScrollingDown ? 'down' : 'up';
  };


  return (
    <div className="body" /*onClick={() => setIsloading(!isLoading)}*/
         onScroll={e => {
           const currentScrollPosition = e.currentTarget.scrollTop;
           setScrollPosition({
             isScrollingDown: scrollPosition.currentScrollPosition < currentScrollPosition,
             currentScrollPosition,
           });

         }}>
      <Border loading={isLoading} width="7px" duration={3}
              color={`linear-gradient(75deg, ${theme.color_accent_primary}, ${theme.color_accent_secondary})`} />
      <div className="page2">
        // TODO make header responsive
        // TODO refactor head to be its own component. + subcomponents of logo nav socialnav etc.

        <header className={`header ${setHeaderScrollClasses(scrollPosition)}`}>
          {console.log(scrollPosition)}
          <div className="logo">
            <a href="#" className="logo__link">
              <img className="logo__img" src="/logo.svg" alt="Felix Tellmann Logo" />
            </a>
          </div>
          <nav className="nav">
            <a href="#" className="nav__item">Hello</a>
            <a href="#" className="nav__item">Articles</a>
            <a href="#" className="nav__item">Projects</a>
            <a href="#" className="nav__item">About</a>
            <a href="#" className="nav__item">Work</a>
          </nav>
          <div className="social">
            <a href="#" className="social__item"><FaFacebookF /></a>
            <a href="#" className="social__item"><FaGithub /> </a>
            <a href="#" className="social__item"><FaEnvelope /></a>
            <a href="#" className="social__item"><FaRegLightbulb /></a>
          </div>
        </header>
      </div>
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