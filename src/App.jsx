import { useState, useRef } from "react";
import CreateProjectPage from "./assets/components/CreateProjectPage";
import TheSideBar from "./assets/components/theSideBar";
import AddProjectDetails from "./assets/components/AddProjectDetails";
import ShowTask from "./assets/components/ShowTask";

let InitialProjectsArr = [];

function App() {
  let [isEdit, setIsEdit] = useState("CreateProjectPage");
  let [projects, setProjects] = useState([...InitialProjectsArr]);
  let [indexOfSelectedProject, setIndexOfSelectedProject] = useState();

  function handleOpenEditing() {
    setIsEdit("AddProjectDetails");
  }

  function handleCloseEditing() {
    setIsEdit("CreateProjectPage");
  }

  function handleShowTask(numberOfProject) {
    setIndexOfSelectedProject(numberOfProject);
    setIsEdit("ShowTask");
  }

  function handleAddProject(newProject) {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  }

  let showingWindow;

  if (isEdit === "CreateProjectPage") {
    showingWindow = <CreateProjectPage handleOpenEditing={handleOpenEditing} />;
  } else if (isEdit === "AddProjectDetails") {
    showingWindow = <AddProjectDetails handleAddProject={handleAddProject} handleCloseEditing={handleCloseEditing} />;
  } else if (isEdit === "ShowTask") {
    showingWindow = (
      <ShowTask
        projects={projects}
        setProjects={setProjects}
        indexOfSelectedProject={indexOfSelectedProject}
        setIsEdit={setIsEdit}
      />
    );
  }

  return (
    <>
      <div className="container">
        <TheSideBar handleOpenEditing={handleOpenEditing} theProjectsArr={projects} handleShowTask={handleShowTask} />
        {showingWindow}
      </div>
    </>
  );
}

export default App;
