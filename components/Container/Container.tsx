import { CSSProperties, FC } from "react";
import { Wrapper } from "components/Wrapper/Wrapper";
import "./Container.scss";

type ContainerProps = {
  wrapper?: boolean | string
  id?: string
  className?: string
  direction?: ("row" | "column" | string)[]
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | string
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | string
  flex?: number | string
  center?: boolean
  vcenter?: boolean
  row?: boolean
  full?: boolean
}

export const Container: FC<ContainerProps> = (
  {
    children,
    wrapper,
    direction = ["column", "column", "column"],
    align = "stretch",
    justify = "flex-start",
    flex = "0 0 auto",
    center,
    vcenter,
    row,
    full,
    id = "",
    className = ""
  }) => {
  
  if (center) {
    align = "center";
    justify = "center";
    flex = 1;
  }
  
  if (vcenter) {
    justify = "center";
    flex = 1;
  }
  
  if (row) {
    direction = ["row", "row", "row"];
  }
  
  if (full) {
    flex = 1;
  }
  return (
    <>
      <style jsx>{`
        .container {
          --align-items: ${align};
          --flex: ${flex};
          --justify-content: ${justify};
          --flex-direction-mobile: ${direction[0]};
          --flex-direction-tablet: ${direction[1]};
          --flex-direction-desktop: ${direction[2]};
        }
    `}
      </style>
      {
        wrapper
        ? <Wrapper width={typeof wrapper === "string" && wrapper}>
          <div id={id} className={`container ${className}`}>{children}</div>
        </Wrapper>
        : <div id={id} className={`container ${className}`}>{children}</div>
      }
    
    </>
  );
};