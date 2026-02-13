"use strict";

const follower = document.querySelector("#follower");
const arrowBtn = document.querySelector("#arrow");

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
  createProjectCards(projectsData.projects);
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

const createProjectCards = (projects) => {
  const parentForProjects = document.querySelector("#projects_list");
  const projectTemplate = document.querySelector("#project_card");

  projects.forEach((project) => {
    const clone = projectTemplate.content.cloneNode(true);
    clone.querySelector("button").id = project.id;
    clone.querySelector(".project-image").src = project.image;
    parentForProjects.appendChild(clone);
  });
};

init();
