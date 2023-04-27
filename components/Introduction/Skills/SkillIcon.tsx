import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Text, Box, useColorModeValue } from "@chakra-ui/react";
import { useAudio } from "../../Audio/AudioWrapper";

interface SkillProps {
  name: string;
}

const SkillIcon = ({ name }: SkillProps) => {
  const [invis, setInvis] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const isAudioOn = useAudio();
  const onMouseEnter = () => {
    setInvis(false);
    if (ref == null || ref.current == null) return;
    ref.current.classList.add("spin");
    if (!isAudioOn) return;
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    new Audio(`/sounds/minecraft/minecraft-pickup-0${randomNumber}.mp3`).play();
  };
  const onMouseLeave = () => {
    setInvis(true);
  };
  const color = useColorModeValue("gray.800", "whiteAlpha.900");
  useEffect(() => {
    if (ref == null || ref.current == null) return;
    const spin = ref.current;
    spin.addEventListener("animationend", () => {
      spin.classList.remove("spin");
    });
  }, []);
  // if feeling crazy then add event handlers and detect when animation ends -> so that the icon will spin to completion (hover will trigger animation)
  return (
    <Box
      mx={1}
      textAlign={"center"}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      w={70}
    >
      <Image
        width={70}
        height={70}
        alt={name}
        src={`/icons/${name}.png`}
        style={{ maxWidth: "none" }}
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
