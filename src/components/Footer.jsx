import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <p>Developed by</p> <Link href="https://osmx.me">OSMX</Link> - 2022{" "}
      <Link href="https://github.com/itsosmx/reactjs-password-generator">
        github repo.
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray);
  gap: 0.3rem;
`;

const Link = styled.a`
  color: var(--secondary);
`;
