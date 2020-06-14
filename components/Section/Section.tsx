import { FC } from "react";

type SectionProps = {
  padding: 0 | 1 | 2 | 3 | 4 | 5 | string
  background?: string
  id?: string
  className?: string
}

export const Section: FC<SectionProps> = ({ children, background, padding, id = "", className = "" }) => {
  
  return (
    <>
      { /*language=SCSS*/}
      <style jsx>{`
        .section {
            padding-top: ${typeof padding === "number" ? `var(--padding-${padding})` : padding};
            padding-bottom: ${typeof padding === "number" ? `var(--padding-${padding})` : padding};
            ${background ? `background: ${background};` : ""};
        }
      `}</style>
      <section id={id} className={`section ${className}`}>{children}</section>
    </>
  );
};