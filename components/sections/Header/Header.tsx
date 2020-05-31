import React, { FC, useState, useRef } from "react";
import Link from 'next/Link';
import Logo from '../../../public/logo-new.svg';
import { useGlobalEvent } from 'beautiful-react-hooks';
import './Header.scss';
import { FaFacebookF, FaGithub, FaEnvelope, FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { Button } from 'components/global';

export const Header: FC = () => {
    const [navActive, setNavActive] = useState(true)
    const onScrollY = useGlobalEvent('scroll');

    onScrollY((event) => {
        window.scrollY > 0 ? setNavActive(false) : setNavActive(true);
    });

    return (
        <header className="header">
            <aside className="logo">
                <Link href="/">
                    <a href="#" className="logo__link">
                        {/*<div className="logo--F" />*/}
                        <Logo />
                        {/*<div className="logo--corner" />*/}
                    </a>
                </Link>
            </aside>
            <aside className={`nav nav--desktop ${navActive ? 'active' : ""}`}>
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
                    <a href="#" className="social-icons__link social-icons__link--version">v.1.0.18</a>
                </div>
                <Button>Connect</Button>
            </aside>
            <aside className={`nav-icon ${!navActive ? 'active' : ""}`} onClick={() => { setNavActive(true) }}>
                <span className="nav-icon__bar"></span>
                <span className="nav-icon__bar"></span>
                <span className="nav-icon__bar"></span>
                <span className="nav-icon__bar"></span>
            </aside>
        </header>
    );
};