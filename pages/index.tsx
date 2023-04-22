import type { NextPage } from "next";
import Introduction from "../components/Introduction/Introduction";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WorkList from "../components/Work/WorkList";
import ProjectList from "../components/Project/ProjectList";
import Other from "../components/Other/Other";
import SkillsSection from "../components/Introduction/Skills/SkillsSection";
import AudioWrapper from "../components/Audio/AudioWrapper";

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <SkillsSection />
      <WorkList />
      <ProjectList />
      <Other />
      <Footer />
    </>
  );
};

export default Home;
