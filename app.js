
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBkGiK9rx1qt1EhdpzBIM5kibWb2a7xeg",
  authDomain: "todo-firebase-7e327.firebaseapp.com",
  projectId: "todo-firebase-7e327",
  storageBucket: "todo-firebase-7e327.appspot.com",
  messagingSenderId: "1033164728009",
  appId: "1:1033164728009:web:9f5d2e7711363be5ec0f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// console.log("app", app)
// console.log("db", db)

const submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", submit)

//Adding data in DataBase
//async await is handled with try catch
async function submit() {

  try {
    const fName = document.getElementById("fName").value
    const lName = document.getElementById("lName").value
    const age = document.getElementById("age").value

    const userObj = {
      fName,
      lName,
      age
    }

    //addDoc(collection, object)
    //collection(db, collectionName)

    const docRef = await addDoc(collection(db, "users"), userObj)
    
    console.log(docRef)

  } catch (error) {
    console.log("error", error.message)
  }



}

//Get data 

window.addEventListener("load", getData)

async function getData() {
  console.log("get data")

// querySnapShot's data is not readable so we use .data() method
  try {
    const querySnapShot = await getDocs(collection(db,"users"))
    querySnapShot.forEach(function (doc) {
      console.log(doc.data())
    })

  } catch (error) {
      console.log("error", error.message)
  }
}