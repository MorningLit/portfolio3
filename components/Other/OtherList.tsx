import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import EmojiFeature from "./EmojiFeature";

interface FeatureProps {
  title: string;
  text: string;
  size: number;
  link: string;
}

const Feature = ({ title, text, size, link }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        <Image
          src={`/icons/${title}.png`}
          width={size}
          height={size}
          alt={title}
        />
      </Flex>
      <Link
        target="_blank"
        rel="noreferrer nofollow"
        href={link}
        fontWeight={600}
        maxWidth={"max-content"}
      >
        {title}
      </Link>
      <Text>{text}</Text>
    </Stack>
  );
};

const OtherList = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          title={"LeetCode"}
          text={"My LeetCode profile where I practice interview questions!"}
          size={40}
          link={"https://leetcode.com/MorningLit/"}
        />
        <Feature
          title={"Kattis"}
          text={"My Kattis profile where I practice coding questions!"}
          size={60}
          link={"https://open.kattis.com/users/ambrose-liew-cheng-yuan"}
        />
        <Feature
          title={"Codeforces"}
          text={
            "My CodeForces profile where I try my hand in competitive programming!"
          }
          size={45}
          link={"https://codeforces.com/profile/MorningLit"}
        />
        <Feature
          title={"dev.to"}
          text={"My Dev.to profile! (It has the same articles as on my Medium)"}
          size={40}
          link={"https://dev.to/morninglit"}
        />
        <EmojiFeature
          emoji="📋"
          title="Old projects"
          text="More old projects that I did!"
          link="/projects"
        />
      </SimpleGrid>
    </Box>
  );
};

export default OtherList;
