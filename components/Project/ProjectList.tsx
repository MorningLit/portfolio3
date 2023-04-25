import { Container, Heading } from "@chakra-ui/react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <Container maxW={"7xl"} py={{ base: 4, md: 12 }}>
      <Heading as="h1" id={"Project"}>
        Projects📋
      </Heading>
      <Project
        title="Language Learners"
        description={[
          "Website that help users to learn new languages through flashcards and an interactive game!",
          "Done in a team of 4 and utilises Microservices for each backend services, socket.io for the game, React, Material UI and Sass were incorporated in the Frontend, and deployed using Kubernetes.",
        ]}
        socials={[
          {
            name: "GitHub",
            link: "https://github.com/CS3219-SE-Principles-and-Patterns/cs3219-project-ay2122-2122-s1-g2",
          },
        ]}
      />
      <Project
        title="Recycle Go Where"
        description={[
          "Recycle Go Where is a convenient platform to find the appropriate e-waste recycling bin nearest to you.",
          "Worked in a team of 4 for LifeHack 2022 Hackathon, utilising Next.js, Material UI and React Google Maps library.",
        ]}
        socials={[
          {
            name: "GitHub",
            link: "https://github.com/kevinchua6/recycle-go-where",
          },
          { name: "Website", link: "https://recycle-gowhere.vercel.app/" },
          {
            name: "DevPost",
            link: "https://devpost.com/software/recycle-go-where",
          },
        ]}
      />
      <Project
        title="Quotes"
        description={[
          "Website displaying quotes, to practice typewriter effect using React!",
        ]}
        socials={[
          { name: "GitHub", link: "https://github.com/MorningLit/quotes" },
          { name: "Website", link: "https://quotes-typewriter.netlify.app/" },
        ]}
      />
      <Project
        title="Practical Touch"
        description={[
          "Android app that made switching between apps easier and simpler to use!",
          "Utilises MVVM architecture and Room database, and was done with my partner for CP2106.",
        ]}
        socials={[
          {
            name: "GitHub",
            link: "https://github.com/weixin-tan/Practical-Touch",
          },
          { name: "Download", link: "http://bit.ly/practical-touch" },
        ]}
      />
    </Container>
  );
};

export default ProjectList;
