import { useRef, useState } from "react";
import Alert from "./Alert";

export default function AddProjectDetails({ handleCloseEditing, handleAddProject }) {
  let theTitleRef = useRef();
  let theDescriptionRef = useRef();
  let theDateRef = useRef();
  let [showAlert, setShowAlert] = useState(false);
  let dialog = useRef();

  function addTheProject() {
    if (theTitleRef.current.value && theDescriptionRef.current.value && theDateRef.current.value !== "") {
      let project = {
        title: theTitleRef.current.value,
        description: theDescriptionRef.current.value,
        Date: theDateRef.current.value,
        task: [],
      };
      handleAddProject(project);
      handleCloseEditing();
    } else {
      setShowAlert(() => !showAlert);
      showDialog();
    }
  }

  function showDialog() {
    dialog.current.open();
  }

  return (
    <>
      <Alert ref={dialog} />
      <div className="input-container">
        <div className="control">
          <button className="cancel-btn" onClick={handleCloseEditing}>
            Cancel
          </button>
          <button className="save-btn" onClick={addTheProject}>
            Save
          </button>
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input ref={theTitleRef} type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input ref={theDescriptionRef} type="textarea" id="description" />
        </div>
        <div>
          <label htmlFor="date">Due Date</label>
          <input ref={theDateRef} type="date" name="date" id="date" />
        </div>
      </div>
    </>
  );
}
