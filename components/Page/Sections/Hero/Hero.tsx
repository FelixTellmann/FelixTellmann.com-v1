import React, { FC } from "react";
import './Hero.scss';
import Mouse from 'static/mouse.svg';

export const Hero: FC = () => {
    return (
        <section className="hero">
            <div className="text-wrapper">
                <h1 className="hero">
                    Hi, I'm Felix. <br />
                    I build beautiful Websites.
                </h1>
            </div>
            <a href="#" className="scroll-down">
                <Mouse />
            </a>
        </section>
    );
};