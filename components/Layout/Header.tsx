import React, { FC, useRef, useState } from "react";
import Link from "next/link";
import { IoLogoWhatsapp, IoMdMenu } from "react-icons/io";
import { useGlobalEvent, useMouseEvents } from "beautiful-react-hooks";
import Logo from "public/logo3-28.svg";

import "./Header.scss";
import { Section } from "components/Section";

export type HeaderProps = {
  data: {
    logo: {
      src: string
      link: string
    },
    navItems: {
      link: string
      title: string
    }[],
    icons: {
      link: string
      src: string
    }[]
  }
}

export const Header: FC<HeaderProps> = ({ data: { logo, navItems, icons } }) => {
  
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
    <Section spacing={0} wrapper position="sticky" className="header section--sticky section--border">
      <header ref={headerSectionRef} className={!openNavMenu && headerOnScroll && "scrolled-down"}>
        <Link href={logo.link}>
          <a className="logo">
            <Logo className={`logo__item ${!openNavMenu && headerOnScroll ? "scrolled-down" : 'active'}`}/>
          </a>
        </Link>
        <nav className="nav">
          {
            navItems.map(navItem => {
              return (
                <Link key={navItem.link} href={navItem.link}>
                  <a className="nav__link">{navItem.title}</a>
                </Link>
              );
            })
          }
        </nav>
        <div className="social-icons">
          {
            icons.map(icon => {
              let iconType = icon.src.substr(0, 2).toLowerCase();
              return (
                <Link key={icon.link} href={icon.link}>
                  <a className="social-icons__link">
                    {
                      React.createElement(iconType === "io"
                                          ? require("react-icons/io")[icon.src]
                                          : require("react-icons/fa")[icon.src])
                    }
                  </a>
                </Link>
              );
            })
          }
        </div>
        <div className="nav-icon" onClick={onNavMenuClick}><IoMdMenu /></div>
      </header>
    </Section>
  );
};