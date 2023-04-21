import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useAudio, useSetAudio } from "./Audio/AudioWrapper";
import NextLink from "next/link";

const Links = ["Home", "Blog", "Projects", "Others"];

const NavLink = ({ url }: { url: string }) => {
  const handleUrl = () => {
    if (url === "Home") return "/";
    return url.toLowerCase();
  };
  return (
    <NextLink href={handleUrl()} passHref>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        {url}
      </Link>
    </NextLink>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isAudioOn = useAudio();
  const setAudio = useSetAudio();
  const toggleColor = () => {
    toggleColorMode();
    if (!isAudioOn) return;
    if (colorMode === "light") {
      new Audio("/sounds/switch/switch-off.mp3").play();
    } else {
      new Audio("/sounds/switch/switch-on.mp3").play();
    }
  };
  const toggleAudio = () => {
    setAudio(!isAudioOn);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>🌞🔥</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} url={link} />
              ))}
            </HStack>
          </HStack>
          <div>
            <Button mr={4} onClick={toggleAudio}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isAudioOn ? (
                  <path d="M5 7H1v6h4l5 5V2L5 7zm11.36 9.36l-1.41-1.41a6.98 6.98 0 0 0 0-9.9l1.41-1.41a8.97 8.97 0 0 1 0 12.72zm-2.82-2.82l-1.42-1.42a3 3 0 0 0 0-4.24l1.42-1.42a4.98 4.98 0 0 1 0 7.08z" />
                ) : (
                  <path d="M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z"></path>
                )}
              </svg>
            </Button>
            <Button onClick={toggleColor}>
              {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} url={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
