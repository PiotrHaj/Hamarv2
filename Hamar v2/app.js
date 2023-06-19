"use strict";

//  FAQ Section
const svg = document.querySelectorAll(".icons2");
const bottom = document.querySelectorAll(".bottom");

for (let i = 0; i < svg.length; i++) {
  svg[i].addEventListener("click", function () {
    bottom[i].classList.toggle("hidden");
    svg[i].classList.toggle("rotateSvg");
  });
}

// Year in footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Nav
const navBtn = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
