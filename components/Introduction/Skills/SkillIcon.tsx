import Image from "next/image";
import { useState } from "react";
import { Text, Box, useColorModeValue } from "@chakra-ui/react";
import { useAudio } from "../../Audio/AudioWrapper";

interface SkillProps {
  name: string;
}

const SkillIcon = ({ name }: SkillProps) => {
  const [invis, setInvis] = useState(true);
  const isAudioOn = useAudio();
  const onMouseEnter = () => {
    setInvis(false);
    if (!isAudioOn) return;
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    new Audio(`/sounds/minecraft/minecraft-pickup-0${randomNumber}.mp3`).play();
  };
  const onMouseLeave = () => {
    setInvis(true);
  };
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  // if feeling crazy then add event handlers and detect when animation ends -> so that the icon will spin to completion (hover will trigger animation)
  return (
    <Box
      mx={1}
      textAlign={"center"}
      className="spin"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        width={"70px"}
        height={"70px"}
        layout={"fixed"}
        alt={name}
        src={`/icons/${name}.png`}
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
