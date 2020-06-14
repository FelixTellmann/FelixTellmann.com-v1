import { CSSProperties, FC } from "react";

type ContainerProps = {
  width?: string
}
export const Wrapper: FC<ContainerProps> = ({ children, width }) => {
  return (
    <>
      { /*language=SCSS*/}
      <style jsx>{`
          .wrapper {
            padding-right: 24px;
            padding-left: 24px;
            max-width: 100%;
            margin-right: auto;
            margin-left: auto;
            ${width ? `width: ${width};` : `width: var(--container-width)`}
          }
      `}</style>
      <div className="wrapper">{children}</div>
    </>
  
  );
};