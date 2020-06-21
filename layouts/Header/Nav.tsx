import { FC } from "react";
import Link from "next/link";
import "./Nav.scss";

export const Nav: FC = ({ children }) => {
  return <nav className="nav">{children}</nav>;
};

type NavItemProps = {
  href: string
  title: string
  onClick?: Function
}

export const NavItem: FC<NavItemProps> = ({ title, href, onClick }) => {
  return (
    <>
      <Link href={href}>
        <a className="nav__item" onClick={onClick && ((e) => onClick(e))}>{title}</a>
      </Link>
    </>
  );
};