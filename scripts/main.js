// Responsive menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  const nav = document.getElementById("navbar");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// Footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

// Courses data
const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    technology: ["Python"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    technology: ["Python"],
    completed: false,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

// Render courses
function displayCourses(filter = "all") {
  const list = document.getElementById("courses-list");
  list.innerHTML = "";

  let filteredCourses = courses;
  if (filter === "wdd")
    filteredCourses = courses.filter((c) => c.subject === "WDD");
  if (filter === "cse")
    filteredCourses = courses.filter((c) => c.subject === "CSE");

  filteredCourses.forEach((course) => {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("course");
    courseDiv.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p>Credits: ${course.credits}</p>
      <p>Tech: ${course.technology.join(", ")}</p>
      <p>Status: <span style="color:${
        course.completed ? "#6A9955" : "#C586C0"
      };">
        ${course.completed ? "Completed" : "Not Completed"}
      </span></p>
    `;
    list.appendChild(courseDiv);
  });
}

document
  .getElementById("all")
  .addEventListener("click", () => displayCourses("all"));
document
  .getElementById("wdd")
  .addEventListener("click", () => displayCourses("wdd"));
document
  .getElementById("cse")
  .addEventListener("click", () => displayCourses("cse"));

// Initial load
displayCourses();
