import { FC, createElement, StyleHTMLAttributes } from "react";
import "./TextItem.scss";

type TextItemProps = {
  /*element type*/
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  p?: boolean;
  span?: boolean
  small?: boolean;
  /*css*/
  bold?: boolean
  weight?: "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  lineHeight?: number | string
  uppercase?:boolean
  center?: boolean
  maxWidth?: string
  noMargin?: boolean
  seconddary?: boolean
  style?: any
  /*attributes*/
  onClick?: Function
  id?: string
  className?: string
  
  /*actions*/
  
}

export const TextItem: FC<TextItemProps> = (props) => {
  
  const elements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small", "span"];
  let element = "";
  let style = {
    textAlign: 'center',
    maxWidth: '140px'
  }
  
  for (let key in props) {
    if (props.hasOwnProperty(key) && elements.includes(key)) {
      (element = key);
      break;
    }
  }
  
  return (
    <>
      {
        element && createElement(element, { style }, props.children)
      }
    </>
  );
};