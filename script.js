document.addEventListener("DOMContentLoaded", function() {

  // Header animation

  const header = document.querySelector('header');

  header.classList.add('slide-in');

  // Section animations

  const sections = document.querySelectorAll('section');

  sections.forEach(section => {

    section.classList.add('fade-in');

  });

  // Project card animations

  const projects = document.querySelectorAll('.project');

  projects.forEach((project, index) => {

    setTimeout(() => {

      project.classList.add('slide-in');

    }, (index + 1) * 200); // Delay each project animation

  });

  // Heading animations

  const headings = document.querySelectorAll('h1, h2, h3');

  headings.forEach((heading, index) => {

    setTimeout(() => {

      heading.style.opacity = '1';

    }, (index + 1) * 200); // Delay each heading animation

  });

});
