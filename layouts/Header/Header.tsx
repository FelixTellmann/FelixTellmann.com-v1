import { FC } from "react";
import { Container } from "layouts/Container";

export const Header: FC = ({ children }) => {
  return (
    <>
      <style jsx>{`
        .header {
          z-index: 1000;
          top: var(--border-width);
          height: var(--header-height);
          display: flex;
          background-color: rgba(var(--color-background-rgb), 0.7);
          box-shadow: 0px -1px 0px 0px inset rgba(0, 0, 0, 0.15);
          transition: 0.1s ease-in;
          backdrop-filter: saturate(180%) blur(5px);
        }
      
      `}</style>
      <header className="header">
        <Container wrapper row justify="space-between">
          {children}
        </Container>
      </header>
    </>
  );
};