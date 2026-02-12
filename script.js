"use strict";

const follower = document.querySelector("#follower");

const followMouse = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  follower.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
};

follower.addEventListener("mousemove", followMouse);
