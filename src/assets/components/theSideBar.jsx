export default function TheSideBar({ handleOpenEditing, theProjectsArr, handleShowTask }) {
  return (
    <aside className="the-side-bar">
      <h1>your projects</h1>
      <button onClick={handleOpenEditing}>+ add projects</button>
      <ul className="existing-tasks">
        {theProjectsArr.map((project, index) => (
          <li key={index} onClick={() => handleShowTask(index)}>
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
