import { FC } from "react";
import Link from "next/link";
import "./Nav.scss";

export const Nav: FC = ({ children }) => {
  return <nav className="nav">{children}</nav>;
};

type NavItemProps = {
  href: string
  title: string
  target?: string
  onClick?: Function
}

export const NavItem: FC<NavItemProps> = ({ title, href, onClick ,target}) => {
  return (
    <>
      <Link href={href}>
        <a className="nav__item" onClick={onClick && ((e) => onClick(e))} target={target}>{title}</a>
      </Link>
    </>
  );
};