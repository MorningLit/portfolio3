import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Introduction from "../components/Introduction/Introduction";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WorkList from "../components/Work/WorkList";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <WorkList />
      <Footer />
    </>
  );
};

export default Home;
