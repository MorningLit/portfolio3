import { Flex } from "@chakra-ui/react";
import SocialIcon from "./SocialIcon";

export interface SocialProps {
  name: string;
  link: string;
}

const SocialsSet = () => {
  const socialsNames: SocialProps[] = [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/ambrose-liew/" },
    { name: "GitHub", link: "https://github.com/MorningLit" },
    { name: "LeetCode", link: "https://leetcode.com/MorningLit/" },
  ];
  return (
    <Flex justifyContent={"space-around"} pt={{ base: 8, lg: 10 }}>
      {socialsNames.map(({ name, link }) => (
        <SocialIcon key={name} name={name} link={link} />
      ))}
    </Flex>
  );
};
export default SocialsSet;
