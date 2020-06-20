import React, { FC, useEffect, useState, useRef } from "react";
import { Button, Loading } from "components";
import Link from "next/link";
import Logo from "public/logo-new.svg";
import { FaFacebookF, FaGithub, FaRegLightbulb } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useGlobalEvent, useMouseEvents } from "beautiful-react-hooks";
import "./_sections.scss";

type ThemeProps = {
  loading: boolean
}

export const Frame: FC<ThemeProps> = ({ children, loading }) => {
  
/*  useEffect(() => {
    Object.entries(theme).forEach(([key, val]: [string, string]) => {
      document.documentElement.style.setProperty(key, val);
    });
  }, []);*/
  
  
  const headerSectionRef = useRef();
  const [headerOnScroll, setHeaderOnScroll] = useState(false);
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);
  const onNavMenuClick = () => setOpenNavMenu(true);
  const { onMouseOver, onMouseLeave } = useMouseEvents(headerSectionRef);
  const hoverTimer: { current: ReturnType<typeof setTimeout> } = useRef();
  
  onMouseOver(() => {
    
    clearTimeout(hoverTimer.current);
    setIsMouseOverHeader(true);
  });
  
  onMouseLeave((e) => {
    if (openNavMenu && window.scrollY > 0) {
      hoverTimer.current = setTimeout(() => {
        setOpenNavMenu(false);
        setHeaderOnScroll(true);
      }, 1000);
    }
    setIsMouseOverHeader(false);
  });
  
  useGlobalEvent("scroll")((event) => {
    if (window.innerWidth > 800 && window.outerWidth > 800 && !isMouseOverHeader) {
      if (openNavMenu && window.scrollY > 0) {
        setTimeout(() => {
          setOpenNavMenu(false);
          setHeaderOnScroll(true);
        }, 1000);
      } else {
        window.scrollY > 0 ? setHeaderOnScroll(true) : setHeaderOnScroll(false);
      }
    }
  });
  
  return (
    <>
      <Loading loading={loading} width="7px" duration={3} />
      <section className="section section--header" ref={headerSectionRef}>
        <header className={`header section__wrapper ${!openNavMenu && headerOnScroll ? "scrolled-down" : ""}`}>
          <Link href="/">
            <a className="logo">
              <Logo />
            </a>
          </Link>
          <nav className="nav">
            <a href="#" className="nav__link">About</a>
            <Link href="blog"><a className="nav__link">Writing</a></Link>
            <a href="#" className="nav__link">Portfolio</a>
            <a href="#" className="nav__link">Contact</a>
          </nav>
          <div className="social-icons">
            <a href="#" className="social-icons__link"><FaFacebookF /></a>
            <a href="#" className="social-icons__link"><FaGithub /> </a>
            <a href="#" className="social-icons__link"><FaRegLightbulb /></a>
            {/*<a href="#" className="social-icons__link social-icons__link--version">v.1.0.18</a>*/}
          </div>
          <Button className="nav-button">Connect</Button>
          
          <div className="nav-icon" onClick={onNavMenuClick}><IoMdMenu /></div>
        </header>
      </section>
      <main className="page">
        {children}
      </main>
    </>
  );
};