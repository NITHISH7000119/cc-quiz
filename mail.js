import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your Firebase config...
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "https://ccmcq-quiz-default-rtdb.firebaseio.com",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const dept = document.getElementById("dept").value.trim();
  const deptNumber = document.getElementById("deptNumber").value.trim();
  const emailid = document.getElementById("emailid").value.trim();

  if (name && dept && deptNumber && emailid) {
    push(ref(db, "students"), { name, dept, deptNumber, emailid })
      .then(() => {
        document.querySelector(".alert").style.display = "block";
        setTimeout(() => document.querySelector(".alert").style.display = "none", 3000);
        document.getElementById("contactForm").reset();
      })
      .catch(error => console.error("Error saving data:", error));
  }
});

// Fetch and render the saved data
const studentList = document.getElementById("studentList");
const listRef = ref(db, "students");

onValue(listRef, (snapshot) => {
  studentList.innerHTML = "";
  snapshot.forEach((child) => {
    const data = child.val();
    const li = document.createElement("li");
    li.textContent = `Name: ${data.name} | Dept: ${data.dept} | Dept No: ${data.deptNumber} | Email: ${data.emailid}`;
    studentList.appendChild(li);
  });
});
