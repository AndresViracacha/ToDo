import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyBnjDEmvywOOCV4TBtSskvs2CxMAE_9Jqw",
  authDomain: "to-do-app-ab488.firebaseapp.com",
  projectId: "to-do-app-ab488",
  storageBucket: "to-do-app-ab488.appspot.com",
  messagingSenderId: "289866747595",
  appId: "1:289866747595:web:50375bb95c7b55d1a9d54e",
  measurementId: "G-57V677FQ23",
});

const db = getFirestore(app);

async function getCities(db) {
  const citiesCol = collection(db, "pais");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

console.log(await getCities(db));

const form = document.getElementById("create-task");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let task = form["input-task"];
  await addDoc(collection(db, "pais"), { cities: task.value });
});

window.addEventListener("DOMContentLoaded", async (e) => {
  await getTask();
});

function getTask(params) {}
