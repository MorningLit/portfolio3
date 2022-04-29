import Image from "next/image";

interface SkillProps {
  name: string;
}

const SkillIcon = ({ name }: SkillProps) => {
  return (
    <figure>
      <Image
        width={"70px"}
        height={"70px"}
        alt={name}
        src={`/icons/${name}.png`}
      />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default SkillIcon;
