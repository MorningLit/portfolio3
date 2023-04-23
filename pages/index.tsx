import type { NextPage } from "next";
import Introduction from "../components/Introduction/Introduction";
import Footer from "../components/Footer";
import WorkList from "../components/Work/WorkList";
import ProjectList from "../components/Project/ProjectList";
import Other from "../components/Other/Other";
import SkillsSection from "../components/Introduction/Skills/SkillsSection";

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
