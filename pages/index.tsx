import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Introduction from "../components/Introduction/Introduction";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <Footer />
    </>
  );
};

export default Home;
