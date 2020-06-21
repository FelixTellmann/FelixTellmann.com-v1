import { FC } from "react";

export const Frame: FC = ({ children }) => {
  return (
    <>
      <style jsx>{`
        .frame {
          min-height: 100vh;
          padding: var(--border-width);
        }
      `}</style>
      <div className="frame">{children}</div>
    </>
  );
};