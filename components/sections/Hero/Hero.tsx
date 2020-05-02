import React, { FC, useEffect, useRef } from "react";
import './Hero.scss';
import { Mouse } from 'components/icons';
import { Typed } from 'components/global';

export const Hero: FC = () => {

    const content = [
        `I build beautiful <br>websites.`,
        `I help people <br>succeed online.`,
        `I teach &amp; write <br>about code.`,
    ];

    return (
        <section className="hero">
            <div className="text-wrapper">
                <h1 className="hero">
                    Hi, I'm <span className="highlight">Felix</span>. <br />
                    <Typed content={content}
                           typeSpeed={40}
                           backSpeed={17}
                           backDelay={1850}
                           loop={true}
                           cursorChar={'|'} />
                </h1>
            </div>
            <a href="#" className="scroll-down">
                <Mouse />
            </a>
        </section>
    );
};