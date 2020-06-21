import { FC } from "react";

export const SocialNav: FC = ({ children }) => {
  return (
    <>
      <nav className="social-nav">
        {children}
      </nav>
    </>
  );
};