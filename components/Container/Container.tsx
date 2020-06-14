import { CSSProperties, FC } from "react";

type ContainerProps = {
  width?: string
}
export const Container: FC<ContainerProps> = ({ children, width }) => {
  return (
    <>
      { /*language=SCSS*/}
      <style jsx>{`
          .container {
            padding-right: 24px;
            padding-left: 24px;
            max-width: 100%;
            margin-right: auto;
            margin-left: auto;
            ${width ? `width: ${width};` : `width: var(--container-width)`}
          }
      `}</style>
      <div className="container">{children}</div>
    </>
  
  );
};