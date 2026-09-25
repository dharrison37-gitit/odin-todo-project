import projectForm from "./projectForm.js";
import "./styles.css";

const projectUI = () => {
  const sectionNew = document.querySelector("#new");

  const header = document.createElement("h3");
  header.textContent = "Create new project";

  const dialog = document.querySelector("#project-dialog");
  dialog.classList.add("dialog");

  const newBtn = document.createElement("button");
  newBtn.textContent = "Create Project";
  newBtn.classList.add("btn", "create");
  newBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });

  sectionNew.appendChild(header);
  sectionNew.appendChild(newBtn);

  projectForm();
};

export default projectUI;
