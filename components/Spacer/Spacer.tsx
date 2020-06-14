import { FC } from "react";

type SpacerProps = {
  x?: 2 | 3 | 4 | 5
  y?: 2 | 3 | 4 | 5
}

export const Spacer: FC<SpacerProps> = ({ x = 1, y = 1 }) => {
  return (
    <>
      { /*language=SCSS*/}
      <style jsx>{`
          .spacer {
              display: block;
              width: 1px;
              height: 1px;
              padding-left: var(--padding-${x});
              padding-top: var(--padding-${y});
          }
      `}</style>
      <div aria-hidden="true" className="spacer" />
    </>
  );
};