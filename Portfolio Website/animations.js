// Animation for the profile photo
gsap.from("#profile-photo", { opacity: 0, scale: 0, duration: 1, delay: 0.5, ease: "elastic" });

// Text animation using Typed.js
var typed = new Typed('.typed-text', {
    strings: ["Creative Thinker", "Passionate Learner", "Good Academic Performer", "Proficient Coder", "Tech-savvy Enthusiast", "Logical Problem-solver", "Innovative Developer", "Collaborative Programmer", "Efficient Learner", "Detail-oriented Coder"],
    typeSpeed: 25,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});

// Animation for the left-section content
gsap.from(".left-section", { opacity: 0, x: -50, duration: 1, delay: 1, ease: "power2.out" });

// Animation for the skills section
gsap.from(".skills-section", { opacity: 0, y: 50, duration: 1, delay: 1.5, ease: "power2.out" });

// Animation for the projects section
gsap.from(".projects-section", { opacity: 0, y: 50, duration: 1, delay: 2, ease: "power2.out" });

// Dynamically generate project tiles
const projectsContainer = document.getElementById("projects-container");

const projects = [
    { title: "Random Password Generator (Python)", description: "A Python-based tool for generating random passwords.", image: "images/password-generator.png" },
    { title: "Weather App (HTML, CSS, JS)", description: "A weather application providing real-time weather information using HTML, CSS, and JavaScript.", image: "images/weather-app.png" },
    { title: "MedVision (Java)", description: "A medical imaging application developed in Java to provide advanced visualization.", image: "images/medvision.png" },
    { title: "Library Management System (Python)", description: "Efficiently manage and organize library resources using Python.", image: "images/library-management.png" },
    { title: "Number Guessing Game (Java)", description: "An interactive number guessing game developed in Java for entertainment.", image: "images/number-guessing-game.png" },
    { title: "BMI Calculator (Python)", description: "A Python-based tool for calculating Body Mass Index (BMI).", image: "images/bmi-calculator.png" },
    { title: "To-Do List (HTML, CSS, JS)", description: "A simple to-do list application to keep track of tasks using HTML, CSS, and JavaScript.", image: "images/todo-list.png" },
    { title: "Calculator (HTML, CSS, JS)", description: "A web-based calculator implemented using HTML, CSS, and JavaScript.", image: "images/calculator.png" },
    { title: "Blood Bank Management System (C)", description: "Ensuring timely access to blood donations, a life-saving initiative implemented in C.", image: "images/blood-bank.png" },
    { title: "AI Summarizer (MERN Stack)", description: "An AI-based summarizer developed using the MERN stack.", image: "images/ai-summarizer.png" },
    { title: "ATM Interface (Java)", description: "A simple ATM interface developed in Java for learning purposes.", image: "images/atm-interface.png" },
    { title: "Book Store (HTML, CSS, JS)", description: "An online book store with a user-friendly interface developed using HTML, CSS, and JavaScript.", image: "images/book-store.png" },
    { title: "Blood Bank Management System (Python)", description: "Redefining blood donation management with the power of Python.", image: "images/blood-bank-management.png" },
    { title: "Instagram Clone (MERN Stack)", description: "A full-stack Instagram clone developed using the MERN stack.", image: "images/instagram-clone.png" },
];

projects.forEach(project => {
    const projectTile = document.createElement("div");
    projectTile.classList.add("project-tile");

    // Small project image on the left
    const smallProject = document.createElement("div");
    smallProject.classList.add("small-project");
    const smallImage = document.createElement("img");
    smallImage.src = project.image;
    smallImage.alt = project.title;
    smallProject.appendChild(smallImage);

    // Large project on the right
    const largeProject = document.createElement("div");
    largeProject.classList.add("large-project");
    const title = document.createElement("h3");
    title.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;

    largeProject.appendChild(title);
    largeProject.appendChild(description);

    projectTile.appendChild(smallProject);
    projectTile.appendChild(largeProject);

    projectsContainer.appendChild(projectTile);
});

// Animation for the project tiles
gsap.from(".project-tile", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.6,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
    },
});

// Dynamically generate skill list
const skillsList = document.getElementById("skills-container");

const skills = [
    { name: "HTML", image: "images/html-icon.png" },
    { name: "CSS", image: "images/css-icon.png" },
    { name: "JavaScript", image: "images/js-icon.png" },
    { name: "Python", image: "images/python-icon.png" },
    { name: "Java", image: "images/java-icon.png" },
    { name: "C++", image: "images/cpp-icon.png" },
    { name: "MySQL", image: "images/mysql-icon.png" },
    { name: "MERN Stack", image: "images/mern-icon.png" },
];

skills.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    const skillImage = document.createElement("img");
    skillImage.src = skill.image;
    skillImage.alt = skill.name;

    const skillName = document.createElement("div");
    skillName.textContent = skill.name;

    skillCard.appendChild(skillImage);
    skillCard.appendChild(skillName);

    skillsList.appendChild(skillCard);
});

// Import the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to animate skills on scroll
function animateSkills() {
    gsap.from(".skill-card", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6, 
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".skills-section",
            start: "top 80%",
            end: "bottom top",
            scrub: 1,
        },
    });
}

// Call the animateSkills function
animateSkills();
