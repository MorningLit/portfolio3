import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Introduction from "../components/Introduction/Introduction";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WorkList from "../components/Work/WorkList";
import ProjectList from "../components/Project/ProjectList";
import Others from "../components/Others";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <WorkList />
      <ProjectList />
      <Others />
      <Footer />
    </>
  );
};

export default Home;
