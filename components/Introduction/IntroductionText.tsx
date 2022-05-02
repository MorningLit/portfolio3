import { Flex, Text, Link, useColorModeValue, Divider } from "@chakra-ui/react";

const IntroductionText = () => {
  const spacing = 6;
  return (
    <Flex fontSize={"2xl"} flexDir={"column"}>
      <Text
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize={"2xl"}
        fontFamily={"monospace"}
        id={"type"}
        position={"relative"}
        maxWidth={"max-content"}
      >
        Hello, I am Ambrose!
      </Text>
      <Text
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize={"2xl"}
        id={"slide"}
      >
        And I have a passion for making websites look{" "}
        <span style={{ fontWeight: 500 }}>Great.</span>
      </Text>
      <Divider my={6} borderColor={useColorModeValue("gray.200", "gray.600")} />
      <Text mb={spacing}>
        I am currently a Year 4 Computer Science student studying in the{" "}
        <span style={{ fontWeight: 500 }}>
          National University of Singapore.
        </span>
      </Text>
      <Text mb={spacing}>
        With not only an interest and experience with Frontend Development🎨, I
        also have experience with Computer Security🔒 and Competitive
        Programming🔢
      </Text>
      <Text mb={spacing}>
        Interested to know more? My resume can be found{" "}
        <Link
          target="_blank"
          href="./Ambrose_Liew_resume.pdf"
          fontWeight={"500"}
          textDecoration={"underline"}
        >
          here!
        </Link>
      </Text>
      <Text>
        Alternatively, you can reach out to me at{" "}
        <Link href="mailto:ambroseliew1998@gmail.com" fontWeight={"500"}>
          ambroseliew1998@gmail.com
        </Link>{" "}
        or{" "}
        <Link href="tel:+6584687312" fontWeight={"500"}>
          +6584687312
        </Link>
      </Text>
    </Flex>
  );
};
export default IntroductionText;
