import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import React from "react";

const Link = (linkProps: LinkProps) => {
  return (
    <ChakraLink as={NextLink} {...linkProps}>
      {linkProps.children}
    </ChakraLink>
  );
};
const Others: NextPage = () => {
  return (
    <div>
      <h1 style={{ fontSize: "2.25rem", fontWeight: 700 }}>Demos</h1>
      <div>
        <h2 style={{ fontSize: "2rem", fontWeight: 600 }}>Frontend Demos</h2>
        <ul>
          <h3 style={{ fontSize: "1.5rem" }}>HTML</h3>
          <li>
            <Link href="/others/dialog">Dialog</Link>
          </li>
          <li>
            <Link href="/others/popover">Popover</Link>
          </li>
          <h3 style={{ fontSize: "1.5rem" }}>CSS</h3>
          <li>
            <Link href="/others/accent-color">Accent Color</Link>
          </li>
          <li>
            <Link href="/others/container-queries">Container Queries</Link>
          </li>
          <h3 style={{ fontSize: "1.5rem" }}>Design</h3>
          <li>
            <Link href="/others/star-button">Shooting star button</Link>
          </li>
          {/* <li>
            <Link href="/others/container-queries">
              Scroll-linked Animations
            </Link>
          </li>
          <li>
            <Link href="/others/container-queries">Subgrid</Link>
          </li>
          <li>
            <Link href="/others/container-queries">Houdini</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Others;
