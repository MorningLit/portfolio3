import Image from "next/image";
import { useState } from "react";
import { Text, Box, useColorModeValue } from "@chakra-ui/react";

interface SkillProps {
  name: string;
}

const SkillIcon = ({ name }: SkillProps) => {
  const [invis, setInvis] = useState(true);
  const onMouseEnter = () => {
    setInvis(false);
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    new Audio(`/sounds/minecraft/minecraft-pickup-0${randomNumber}.mp3`).play();
  };
  const onMouseLeave = () => {
    setInvis(true);
  };
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Box mx={1} textAlign={"center"}>
      <Image
        width={"70px"}
        height={"70px"}
        layout={"fixed"}
        alt={name}
        src={`/icons/${name}.png`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Text
        fontSize={{ base: "0.9rem", sm: "0.8rem", lg: "0.7rem" }}
        fontWeight={"bold"}
        transition={"color 0.555s ease-out"}
        color={invis ? "transparent" : color}
      >
        {name}
      </Text>
    </Box>
  );
};

export default SkillIcon;
