import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import SkillIcon from "./SkillIcon";

const SkillsSet = () => {
  const languagesNames: string[] = [
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
  ];
  const webDevelopmentNames: string[] = [
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Vue",
    "Styled Components",
  ];
  const otherNames: string[] = [
    "Android Studio",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Travis CI",
    "Mocha",
    "Cypress",
  ];
  return (
    <Flex flexDir={"column"}>
      <Text
        fontSize={{ base: "14px", lg: "16px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Languages
      </Text>
      <Flex>
        {languagesNames.map((name) => (
          <SkillIcon key={name} name={name} />
        ))}
      </Flex>
      <Text
        fontSize={{ base: "14px", lg: "16px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Web Development
      </Text>
      <Flex>
        {webDevelopmentNames.map((name) => (
          <SkillIcon key={name} name={name} />
        ))}
      </Flex>
      <Text
        fontSize={{ base: "14px", lg: "16px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Other Technologies
      </Text>
      <Flex>
        {otherNames.map((name) => (
          <SkillIcon key={name} name={name} />
        ))}
      </Flex>
    </Flex>
  );
};
export default SkillsSet;
