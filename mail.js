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
firebase.initializeApp(firebaseConfig);


// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
