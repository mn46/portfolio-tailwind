"use strict";

const follower = document.querySelector("#follower");
const arrowBtn = document.querySelector("#arrow");
let projects;

const getProjectsData = async () => {
  try {
    const res = await fetch("./projects.json");

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const init = async () => {
  const projectsData = await getProjectsData();
  projects = projectsData.projects;
  createProjectCards();
};

const followMouse = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  follower.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
};

follower.addEventListener("mousemove", followMouse);

const scrollToMyWorks = () => {
  document.querySelector("#my_works").scrollIntoView();
};

arrowBtn.addEventListener("click", scrollToMyWorks);

const showAndPopulateModal = (e) => {
  document.querySelector("#modal").style.display = "block";

  const projectId = Number(e.target.id);

  const project = projects.find((item) => item.id === projectId);

  const title = document.querySelector("#modal_title");
  const image = document.querySelector("#modal_image");
  const technologies = document.querySelector("#modal_technologies");
  const description = document.querySelector("#modal_description");
  const link = document.querySelector("#project_link");

  title.textContent = project.title;
  image.src = project.image;
  technologies.textContent = project.technologies.join(", ");
  description.textContent = project.description;
  link.href = project.link;
  link.textContent = project.link;

  document.querySelector("#close_button").addEventListener("click", closeModal);
};

const closeModal = () => {
  document.querySelector("#modal").style.display = "none";
};

const createProjectCards = () => {
  const parentForProjects = document.querySelector("#projects_list");
  const projectTemplate = document.querySelector("#project_card");

  projects.forEach((project) => {
    const clone = projectTemplate.content.cloneNode(true);

    clone.querySelector("button").id = project.id;
    clone.querySelector(".project-image").src = project.image;
    clone
      .querySelector("button")
      .addEventListener("click", showAndPopulateModal);

    parentForProjects.appendChild(clone);
  });
};

init();
