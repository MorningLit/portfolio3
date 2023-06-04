import { Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const ViewAllDemosButton = () => {
  return (
    <Link
      px={2}
      py={1}
      as={NextLink}
      rounded={"md"}
      href={"/others"}
      fontWeight={600}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      ← View All Demos
    </Link>
  );
};

export default ViewAllDemosButton;
