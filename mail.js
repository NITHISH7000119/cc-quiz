const firebaseConfig = {
    apiKey: "AIzaSyBVoN4JYELuR1pjMm-A2lc4YUIpSRo7Srw",
    authDomain: "ccmcq-quiz.firebaseapp.com",
    databaseURL: "https://ccmcq-quiz-default-rtdb.firebaseio.com",
    projectId: "ccmcq-quiz",
    storageBucket: "ccmcq-quiz.firebasestorage.app",
    messagingSenderId: "99149713645",
    appId: "1:99149713645:web:6efc0752e69b3814013ce4"
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
