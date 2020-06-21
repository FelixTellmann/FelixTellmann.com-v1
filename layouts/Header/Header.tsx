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
          box-shadow: var(--shadow-header);
          transition: var(--transition);
          backdrop-filter: var(--blur);
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