import React, { FC, useEffect, useRef } from "react";
import { Mouse } from "components/Icons";
import { Typed } from "components";
import "./Hero.scss";

export const Hero: FC = () => {
  
  const content = [
    `I build beautiful <br>websites.`,
    /*`I help people <br>succeed online.`,
    `I teach &amp; write <br>about code.`,*/
  ];
  
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero">
          Hi, I'm <span className="highlight">Felix</span>. <br />
          <Typed content={content}
                 typeSpeed={40}
                 backSpeed={17}
                 backDelay={1850}
                 loop={true}
                 cursorChar={"|"} />
        </h1>
      </div>
      <a href="#" className="scroll-down">
        <Mouse />
      </a>
    </section>
  );
};