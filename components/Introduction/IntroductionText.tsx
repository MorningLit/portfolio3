import { VStack, Text, Link, useColorModeValue } from "@chakra-ui/react";

const IntroductionText = () => {
  return (
    <VStack spacing={{ base: 4, sm: 6 }}>
      <Text
        color={useColorModeValue("gray.500", "gray.400")}
        fontSize={"2xl"}
        fontWeight={"300"}
      >
        Hello, I am Ambrose! And I have an passion for making websites look{" "}
        <span style={{ fontWeight: 500 }}>Great.</span>
      </Text>
      <Text fontSize={"lg"}>
        Besides Frontend Development🎨, I also have experience with Computer
        Security🔒 and Competitive Programming🔢
        <br />
        Interested to know more? My resume can be found{" "}
        <Link
          target="_blank"
          href="./Ambrose_Liew_resume.pdf"
          fontWeight={"500"}
        >
          here!
        </Link>
        <br />
        Alternatively, you can reach out to me at{" "}
        <Link href="mailto:ambroseliew1998@gmail.com" fontWeight={"500"}>
          ambroseliew1998@gmail.com
        </Link>{" "}
        or{" "}
        <Link href="tel:+6584687312" fontWeight={"500"}>
          +6584687312
        </Link>
      </Text>
    </VStack>
  );
};
export default IntroductionText;
