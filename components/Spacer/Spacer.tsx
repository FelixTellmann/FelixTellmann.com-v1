import { FC } from "react";

type SpacerProps = {
  x?: number
  y?: number
}

export const Spacer: FC<SpacerProps> = ({ x = 1, y = 1 }) => {
  return (
    <>
      <style jsx>{`
        .spacer {
          --gap-ratio-y: ${y};
          --gap-ratio-x: ${x};
        }
      `}</style>
      <div aria-hidden="true" className="spacer" />
    </>
  );
};