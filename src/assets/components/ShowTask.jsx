import { useRef } from "react";

export default function ShowTask({ projects, setProjects, indexOfSelectedProject, setIsEdit }) {
  // console.log(projects[indexOfSelectedProject].task);
  const theProject = {
    ...projects[indexOfSelectedProject],
    task: [...projects[indexOfSelectedProject].task],
  };

  const taskInnerText = useRef();

  function handleDeleteProject() {
    let immutableArr = [...projects];
    immutableArr.splice(indexOfSelectedProject, 1);
    setProjects(immutableArr);
    setIsEdit("CreateProjectPage");
  }

  function handleAddTaskToProject() {
    theProject.task = [taskInnerText.current.value, ...theProject.task];

    let theTest = {
      ...projects[indexOfSelectedProject],
      task: [taskInnerText.current.value, ...projects[indexOfSelectedProject].task],
    };

    setProjects((prevProjects) => {
      let arrToEdit = [...prevProjects];
      arrToEdit.splice(indexOfSelectedProject, 1);
      arrToEdit.splice(indexOfSelectedProject, 0, theTest);
      return arrToEdit;
    });

    taskInnerText.current.value = "";
  }

  function handleDeleteTask(indexOfTask) {
    setProjects((prevProjects) => {
      let theTest = {
        ...projects[indexOfSelectedProject],
        task: [...projects[indexOfSelectedProject].task],
      };

      // try without immutably (it faulted , it make clear btn delete 2 Tasks enstad of one) and i have to use theTest
      // theProject.task.splice(indexOfTask, 1);

      theTest.task.splice(indexOfTask, 1);

      let arrToEdit = [...prevProjects];
      arrToEdit.splice(indexOfSelectedProject, 1);
      arrToEdit.splice(indexOfSelectedProject, 0, theTest);
      return arrToEdit;
    });
  }

  return (
    <div className="show-task">
      <header>
        <div className="task-name">
          <p>{theProject.title}</p> <span onClick={handleDeleteProject}>Delete</span>
        </div>
        <div className="date">
          <p>{theProject.date}</p>
        </div>
        <div className="description">
          <p>{theProject.description}</p>
        </div>
      </header>

      <div className="task">
        <h2>Task</h2>
        <div className="add-task-input">
          <input type="text" ref={taskInnerText} />
          <span onClick={handleAddTaskToProject}>Add Task</span>
        </div>
        {theProject.task.length === 0 ? (
          <p>This project does not have any tasks yet.</p>
        ) : (
          <ul>
            {theProject.task.map((task, index) => (
              <li className={"task"} key={index}>
                {task} <span onClick={() => handleDeleteTask(index)}>Clear</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
