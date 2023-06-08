import type { NextPage } from "next";
import Introduction from "../components/Introduction/Introduction";
import WorkList from "../components/Work/WorkList";
import ProjectList from "../components/Project/ProjectList";
import Other from "../components/Other/Other";
import SkillsSection from "../components/Introduction/Skills/SkillsSection";

const Home: NextPage = () => {
  return (
    <div style={{ gap: "64px", display: "flex", flexDirection: "column" }}>
      <Introduction />
      <SkillsSection />
      <WorkList />
      <ProjectList />
      <Other />
    </div>
  );
};

export default Home;
