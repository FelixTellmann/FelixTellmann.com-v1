import React, { FC } from "react";
import Link from 'next/Link';

import './Header.scss';
import { FaFacebookF, FaGithub, FaEnvelope, FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { Button } from 'components/global';

export const Header: FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link href="/">
                    <a href="#" className="logo__link">
                        <div className="logo--F" />
                        <div className="logo--corner" />
                    </a>
                </Link>
            </div>
            <nav className="nav">
                <a href="#" className="nav__link">About</a>
                <a href="#" className="nav__link">Portfolio</a>
                <Link href="blog"><a className="nav__link">Blog</a></Link>

                <a href="#" className="nav__link">Connect</a>
            </nav>
            <div className="social-icons">
                <a href="#" className="social-icons__link"><FaFacebookF /></a>
                <a href="#" className="social-icons__link"><FaGithub /> </a>
                <a href="#" className="social-icons__link"><FaRegLightbulb /></a>
                <a href="#" className="social-icons__link social-icons__link--version">v.1.0.18</a>
            </div>
            <Button>Connect</Button>
        </header>
    );
};