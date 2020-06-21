import React, { FC, createElement } from "react";
import Link from "next/link";
import "./SocialNav.scss";

export const SocialNav: FC = ({ children }) => {
  return (
    <>
      <nav className="social-nav">
        {children}
      </nav>
    </>
  );
};

type SocialNavItemProps = {
  icon: string
  href: string
  title: string
  target?: string
  onClick?: Function
}

export const SocialNavItem: FC<SocialNavItemProps> = ({ icon, title, href, onClick, target }) => {
  let type = icon.substr(0, 2).toLowerCase();
  let Icon = createElement(require(type === "io" ? "react-icons/io" : "react-icons/fa")[icon], { alt: title });

  return (
    <>
      <Link href={href}>
        <a className="social-nav__item" onClick={onClick && ((e) => onClick(e))} target={target}>
          {Icon}
        </a>
      </Link>
    </>
  );
};