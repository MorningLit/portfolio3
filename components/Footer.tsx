import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      target="_blank"
      rel="noreferrer nofollow"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontWeight={"500"}>Ambrose Liew</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/ambrose-liew/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"GitHub"} href={"https://github.com/MorningLit"}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"Medium"}
            href={"https://medium.com/@ambroseliew1998"}
          >
            <SiMedium />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
