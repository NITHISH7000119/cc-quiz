// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLuminpUmMalhgTY86vHNhfKHBmD3FV7w",
  authDomain: "cc-quiz-3bd7e.firebaseapp.com",
  databaseURL: "https://cc-quiz-3bd7e-default-rtdb.firebaseio.com",
  projectId: "cc-quiz-3bd7e",
  storageBucket: "cc-quiz-3bd7e.firebasestorage.app",
  messagingSenderId: "658492569940",
  appId: "1:658492569940:web:ca6f46b406df3ebd0c30c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get field values
  const name = document.getElementById("name").value.trim();
  const dept = document.getElementById("dept").value.trim();
  const deptNumber = document.getElementById("deptNumber").value.trim();
  const emailid = document.getElementById("emailid").value.trim();

  if (name && dept && deptNumber && emailid) {
    // Push data to Firebase
    push(ref(db, "students"), {
      name,
      dept,
      deptNumber,
      emailid
    })
    .then(() => {
      document.querySelector(".alert").style.display = "block";
      setTimeout(() => document.querySelector(".alert").style.display = "none", 3000);
      document.getElementById("contactForm").reset();
    })
    .catch(error => {
      console.error("Error saving data:", error);
    });
  }
});
