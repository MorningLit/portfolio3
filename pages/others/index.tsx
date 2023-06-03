import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Others: NextPage = () => {
  return (
    <Container maxW={"7xl"} py={{ base: 4, lg: 12 }}>
      {/**TODO: stylise page */}
      <ul>
        <h3>HTML</h3>
        <li>
          <Link href="/others/dialog">Dialog</Link>
        </li>
        <li>
          <Link href="/others/dialog">Popover</Link>
        </li>
        <h3>CSS</h3>
        <li>
          <Link href="/others/container-queries">Accent Color</Link>
        </li>
        <li>
          <Link href="/others/container-queries">Container Queries</Link>
        </li>
        <li>
          <Link href="/others/container-queries">Scroll-linked Animations</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Others;
