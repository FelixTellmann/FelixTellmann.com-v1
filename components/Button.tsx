import React, { CSSProperties, FC } from "react";
import "./Button.scss";
import Link from "next/link";

type ButtonProps = {
  title: string
  href?: string
  onClick?: (event: React.MouseEvent) => void;
  style?: CSSProperties
  size?: string
  
}

export const Button: FC<ButtonProps> = ({ children, href = "", title, style = {}, onClick, size }) => {
  
  size && (style["--font-size-button"] = size);
  
  return (
    <>
      {
        href
        ? <Link href={href}><a role="button" className="button" onClick={onClick} style={style}><span>{title}</span></a></Link>
        : <a role="button" className="button" onClick={onClick} style={style}><span>{title}</span></a>
      }
    
    </>
  );
};