import { CSSProperties, FC } from "react";
import { Wrapper } from "components/Wrapper/Wrapper";

type ContainerProps = {
  width?: "auto" | string
}
export const Container: FC<ContainerProps> = ({ children, width }) => {
  return (
    <>
      { /*language=SCSS*/}
      <style jsx>{`
          .container {
              display: flex;
              flex-direction: column;
              position: relative;
              min-width: 1px;
              max-width: 100%;
              flex: var(--flex);
              justify-content: var(--justify-content);
              align-items: var(--align-items);
          }
      `}</style>
      
      {
        width
        ? <Wrapper width={width !== "auto" && width}>
          <div className="container">{children}</div>
        </Wrapper>
        : <div className="container">{children}</div>
      }
    
    </>
  );
};