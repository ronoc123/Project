import React from "react";
import { useAppContext } from "../../context/appContext";
import { JobsContainer, SearchContainer } from "../../components/index.js";

const AllJobs = () => {
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
