import Image from "next/image";
import { SocialProps } from "./SocialsSet";
import { Link } from "@chakra-ui/react";

const SocialIcon = ({ name, link }: SocialProps) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer nofollow">
      <Image width={50} height={50} src={`/icons/${name}.png`} alt={name} />
    </Link>
  );
};
export default SocialIcon;
