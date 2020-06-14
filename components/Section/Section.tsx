import { FC } from "react";
import { Container } from "components";

type SectionProps = {
  padding: 0 | 1 | 2 | 3 | 4 | string
  width?: "auto" | string
  background?: string
  id?: string
  className?: string
}

export const Section: FC<SectionProps> = ({ children, width, background, padding, id = "", className = "" }) => {
  
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
      <section id={id} className={`section ${className}`}>
        {
          width
          ? <Container width={width !== "auto" && width}>{children}</Container>
          : children
        }
      </section>
    </>
  );
};