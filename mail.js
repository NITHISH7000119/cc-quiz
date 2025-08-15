import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLuminpUmMalhgTY86vHNhfKHBmD3FV7w",
  authDomain: "cc-quiz-3bd7e.firebaseapp.com",
  databaseURL: "https://ccmcq-quiz-3bd7e-default-rtdb.firebaseio.com",
  projectId: "cc-quiz-3bd7e",
  storageBucket: "cc-quiz-3bd7e.firebasestorage.app",
  messagingSenderId: "658492569940",
  appId: "1:658492569940:web:ca6f46b406df3ebd0c30c1"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dept = document.getElementById("dept").value;
  const deptNumber = document.getElementById("deptNumber").value;
  const emailid = document.getElementById("emailid").value;

  push(ref(db, "contactForm"), {
    name,
    dept,
    deptNumber,
    emailid
  }).then(() => {
    alert("Data saved successfully!");
    document.getElementById("contactForm").reset();
  }).catch((error) => {
    console.error("Error:", error);
  });
});
