import type { NextPage } from "next";
import { Heading } from "@chakra-ui/react";
import Project from "../components/Project/Project";

const ProjectPage: NextPage = () => {
  return (
    <>
      <OldProjectList />
    </>
  );
};

var OldProjectList = () => {
  return (
    <>
      <Heading as="h1" id={"Project"}>
        Projects📋
      </Heading>
      <Project
        title="3D RNG Simulator"
        description={[
          "Website to flip coins and toss dice. Made using React and React Three.js",
        ]}
        socials={[
          {
            name: "GitHub",
            link: "https://github.com/MorningLit/3D-RNG-Simulator",
          },
          { name: "Website", link: "https://3d-diceapp.netlify.app/" },
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
      <Project
        title="Folder Friend"
        description={[
          "CRUD To-Do list website made using React and Ruby on Rails.",
        ]}
        socials={[
          { name: "GitHub", link: "https://github.com/MorningLit/CVWO" },
          { name: "Website", link: "https://folder-friend.herokuapp.com/" },
        ]}
      />
    </>
  );
};

export default ProjectPage;
