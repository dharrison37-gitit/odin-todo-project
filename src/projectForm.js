import "./project.css";
import createProject from "./project.js";

const projectForm = () => {
  const submitBtn = document.querySelector("#add-btn");
  submitBtn.textContent = "Add";
  submitBtn.classList.add("btn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.querySelector("#project-form");
    const formData = new FormData(form);
    const projectName = formData.get("name");

    if (!projectName) return;

    const projects = document.querySelector("#projects");

    const project = createProject(projectName);

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("grid");
    projectContainer.textContent = project.getName();

    const addBtn = document.createElement("button");
    addBtn.classList.add("btn");
    addBtn.textContent = "+";
    projectContainer.appendChild(addBtn);

    projects.appendChild(projectContainer);

    form.reset();
    dialog.close();
  });

  const cancelBtn = document.querySelector("#cancel");
  cancelBtn.textContent = "Cancel";
  cancelBtn.classList.add("btn");
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  const dialog = document.querySelector("#project-dialog");
};

export default projectForm;
