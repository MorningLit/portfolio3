import { Container, Heading } from "@chakra-ui/react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <Container maxW={"7xl"} p="12">
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
        title="Covid-19 Statistics Webpage"
        description={[
          "Website that retrieves and displays updated COVID-19 statistics, made using Vue!",
        ]}
        socials={[
          { name: "GitHub", link: "https://github.com/MorningLit/covid-19" },
          { name: "Website", link: "https://covid-19-vue.netlify.app/" },
        ]}
      />
      <Project
        title="Practical Touch"
        description={[
          "Android app that made switching between apps easier and simpler to use.",
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
      <Project
        title="FaveMovies"
        description={[
          "Website that retrieves data and displays movies, with a focus on Mobile-Responsiveness.",
          "Made using React and Axios.",
        ]}
        socials={[
          { name: "GitHub", link: "https://github.com/MorningLit/FaveMovies" },
        ]}
      />
    </Container>
  );
};

export default ProjectList;
