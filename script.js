"use strict";

const follower = document.querySelector("#follower");
const arrowBtn = document.querySelector("#arrow");

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
