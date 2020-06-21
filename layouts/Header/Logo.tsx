import { FC } from "react";
import Link from "next/link";
import "./Logo.scss";

type LogoProps = {
  href: string
  src?: string
  headerActive?: boolean
}

export const Logo: FC<LogoProps> = ({ children, href, src, headerActive = true }) => {
  return (
    <>
      <Link href={href}>
        <a className={`logo ${headerActive ? "active" : ""}`}>
          {
            src
            ? <img src={src} alt="Logo" />
            : children
          }
        </a>
      </Link>
    </>
  );
};