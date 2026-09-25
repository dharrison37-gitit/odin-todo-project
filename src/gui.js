import projectForm from "./projectForm.js";
import "./styles.css";

const projectUI = () => {
  const projectSection = document.querySelector("#projects");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("grid-header");

  const header = document.createElement("h3");
  header.textContent = "Projects";

  const dialog = document.querySelector("#project-dialog");
  dialog.classList.add("dialog");

  const newBtn = document.createElement("button");
  newBtn.textContent = "Create Project";
  newBtn.classList.add("btn", "create");
  newBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });

  headerDiv.appendChild(header);
  headerDiv.appendChild(newBtn);

  projectSection.appendChild(headerDiv);

  projectForm();
};

export default projectUI;
