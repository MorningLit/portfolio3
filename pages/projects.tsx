import type { NextPage } from "next";
import OldProjectList from "../components/OldProject/OldProjectList";
import ReturnNavBar from "../components/ReturnNavBar";

const Project: NextPage = () => {
  return (
    <>
      <ReturnNavBar />
      <OldProjectList />
    </>
  );
};
export default Project;
