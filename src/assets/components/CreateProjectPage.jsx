import logo from "../no-projects.png";

export default function CreateProjectPage({ handleOpenEditing }) {
  return (
    <div className="main-space">
      <img src={logo} alt="" />
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <button onClick={handleOpenEditing}>Create new project</button>
    </div>
  );
}
