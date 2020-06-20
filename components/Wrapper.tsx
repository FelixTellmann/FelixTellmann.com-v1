import { CSSProperties, FC } from "react";
import "./Wrapper.scss";

type ContainerProps = {
  width?: string
}

export const Wrapper: FC<ContainerProps> = ({ children, width }) => {
  return (
    <>
      {width && <style jsx>{`.wrapper {--frame-width: ${width}}`}</style>}
      <div className="wrapper">{children}</div>
    </>
  
  );
};