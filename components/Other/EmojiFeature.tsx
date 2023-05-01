import { Stack, Flex, Text, useColorModeValue, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface EmojiFeatureProps {
  title: string;
  text: string;
  emoji: string;
  link: string;
}

const EmojiFeature = ({ title, text, emoji, link }: EmojiFeatureProps) => {
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
        fontSize={"4xl"}
      >
        {emoji}
      </Flex>
      <Link as={NextLink} href={link} fontWeight={600} maxWidth={"max-content"}>
        {title}
      </Link>
      <Text>{text}</Text>
    </Stack>
  );
};

export default EmojiFeature;
