import { FC } from "react";
import "./Section.scss";
import { Wrapper } from "components";

type SectionProps = {
  wrapper?: boolean
  maxWidth?: string
  top?: number
  bottom?: number
  spacing?: number
  background?: string
  position?: string
  id?: string
  className?: string
}

export const Section: FC<SectionProps> = ({ children, wrapper, maxWidth, position, background, top = 3, bottom = 3, spacing, id = "", className = "" }) => {
  
  (spacing || spacing === 0) && (top = spacing, bottom = spacing);
  return (
    <>
      <style jsx>{`
        .section {
          --gap-ratio-top: ${top};
          --gap-ratio-bottom: ${bottom};
          ${background ? `background: ${background};` : ""};
          ${position ? `position: ${position};` : ""};
        }
      `}</style>
      <section id={id} className={`section ${className}`}>
        {
          wrapper
          ? <Wrapper width={maxWidth && maxWidth}>{children}</Wrapper>
          : children
        }
      </section>
    </>
  );
};