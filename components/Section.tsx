import { FC } from "react";
import "./Section.scss";

type SectionProps = {
  top?: number
  bottom?: number
  spacing?: number
  background?: string
  id?: string
  className?: string
}

export const Section: FC<SectionProps> = ({ children, background, top = 3, bottom = 3, spacing, id = "", className = "" }) => {
  
  spacing && (top = spacing, bottom = spacing);
  return (
    <>
      <style jsx>{`
        .section {
          --gap-ratio-top: ${top};
          --gap-ratio-bottom: ${bottom};
          ${background ? `background: ${background};` : ""};
        }
      `}</style>
      <section id={id} className={`section ${className}`}>{children}</section>
    </>
  );
};