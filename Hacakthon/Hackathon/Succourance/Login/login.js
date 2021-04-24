// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAxK3M3FhnpjvZCb9K-8IFW7V3N0QWZwsk",
  authDomain: "succourance-ee601.firebaseapp.com",
  projectId: "succourance-ee601",
  storageBucket: "succourance-ee601.appspot.com",
  messagingSenderId: "205897395861",
  appId: "1:205897395861:web:6f9a219b4d91ef84bbb59c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

  promise.catch(e => alert(e.message));
  alert("Signed Up");

}

function signin() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);

  promise.catch(e => alert(e.message));
  alert("Logged In With " + email.value);

  window.location.href = "homepage.html";
}
