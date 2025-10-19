//sidebar toggle expanded
const header = document.querySelector("header");
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelectorAll(".sidebar-btn");
sidebarBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
});
  
//sidebar nav
const links = document.querySelectorAll("a");/*:not(.fa)*/
const pages = document.querySelectorAll(".page");
document.getElementById("home-page").style.display = "grid";
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const pageId = link.getAttribute("page-id");
    
    pages.forEach((page) => {
      page.style.display = pageId+"-page" === page.id ? "grid" : "none";
    });
    
    header.textContent = link.textContent.toUpperCase();
    
    //topFunction();
    sidebar.classList.remove("active");
  });
});

//date & time
const showDay = document.getElementById("day");
const showDate = document.getElementById("date");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

function updateDate(){
  const dt = new Date();
  const midnight = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1);
  const timeUntilMidnight = midnight.getTime()-dt.getTime();
  showDay.innerHTML = (days[dt.getDay()].toUpperCase());
  showDate.innerHTML = (/*days[dt.getDay()].toUpperCase() + " " +*/ ("0"+dt.getDate()).slice(-2) + " " + months[dt.getMonth()] + " " + dt.getFullYear());
  
  setTimeout(updateDate,timeUntilMidnight);
}
updateDate();

const showTime = document.getElementById("time");
function updateTime(){
  const dt = new Date();
  const AM_PM = dt.getHours()<12 ? 'AM':'PM';
  showTime.innerHTML = (("0"+dt.getHours()).slice(-2) + ":" + ("0"+dt.getMinutes()).slice(-2) + ":" + ("0"+dt.getSeconds()).slice(-2) + " " + AM_PM);
  setTimeout(updateTime, 1000);
}
updateTime();

//VocabList table
const table = document.querySelector("table");
const tbody = table.querySelector("tbody");

function deleteRow(button){
  if(tbody.rows.length <= 1){
    alert("Minimum of 1 row is required.")
  }else{
    const row = button.parentNode.parentNode; // Get the row from the button
    const tbody = row.parentNode; // Get the tbody
    const rowIndex = row.rowIndex; // Get the index *before* deleting

    tbody.deleteRow(row.rowIndex - 1); // Delete the row (adjust index for zero-based)
  }
}
function addRowBelow(button){
  const row = button.parentNode.parentNode;
  const rowIndex = row.rowIndex;
  addRow(rowIndex);
}
function addRow(rowIndex = undefined){
  let newRow;
  if (rowIndex === undefined){
    newRow = tbody.insertRow();
  }else{
    newRow = tbody.insertRow(rowIndex);     
  }
  const wordCell = newRow.insertCell();
  const meaningCell = newRow.insertCell();
  const buttonCell = newRow.insertCell(); 
  
  buttonCell.classList.add("container");

  wordCell.innerHTML = '<input type="text" name="word[]">';
  meaningCell.innerHTML = '<input type="text" name="meaning[]">';
  buttonCell.innerHTML = '<button class="controls" onclick="deleteRow(this)">-</button><button class="controls" onclick="addRowBelow(this)">+</button>'; // Button in each row  
}

//Lists and data
let vocabData;
const currentList = document.getElementById("current-list");
const showCurrent = document.getElementById("show-current");

const mainList = document.getElementById("main-list"); //collapsible in list-page
const testList = document.getElementById("test-list"); //collapsible in test-page
const vocabLists = document.querySelector(".vocab-lists"); //to append child
const collapsibleLists = document.querySelectorAll(".collapsible-list"); //to show and hide vocabLists and 'add new list'

const hideContent = document.querySelector(".hideContent");
//set initial
currentList.disabled = true; //disable inputs
table.style.display = "none";
hideContent.style.display = "none";

function updateListName(event){
  if(event.key === "Enter"){
    const newInput = currentList.value.trim();
    if(newInput!==""){
      currentList.value = newInput;
      const oldInput = vocabData;
      const oldList = document.getElementById(oldInput);
      oldList.id = newInput;
      oldList.textContent = newInput;
      const storedData = localStorage.getItem(oldInput);
      if(storedData){
        localStorage.setItem(newInput, storedData);
        localStorage.removeItem(oldInput);
      }
      vocabData = newInput;
      alert("New list name: "+vocabData)
      loadData();
    }
  }
}
function addList(listId){
  const newList = document.createElement("button");
  newList.classList.add("list-style");
  newList.onclick=selectList; 
  if(listId != undefined){
    newList.id = listId;
  }else{
    let Id="NewList" + (mainList.children.length+1); 
    //check for same id within range of 10
    if(document.getElementById(Id)){
      for (let i = 1; i < 10/*max amount of list?*/; i++) {
        Id="NewList"+i;
        if(!document.getElementById(Id)){
          break;
        }
      }
    }
    newList.id = Id;
  }
  newList.textContent=newList.id;
  vocabLists.appendChild(newList);
}
function selectList(){
  currentList.value = vocabData = showCurrent.value = this.id;
  currentList.disabled = false;
  table.style.display = "block";
  hideContent.style.display = "grid";
  loadData();
}

function saveData() {
  const data = [];

  for (let i = 1; i < table.rows.length; i++) { // Start from 1 to skip header row
    const row = table.rows[i];
    const wordInput = row.cells[0].querySelector("input");
    const meaningInput = row.cells[1].querySelector("input");
    
    //.trim() to remove whitespace
    const word = wordInput.value.trim();
    const meaning = meaningInput.value.trim();
    //check if input is empty
    if (word!==""&&meaning!==""){
      data.push({ word, meaning });
    }
  }

  localStorage.setItem(vocabData, JSON.stringify(data));
  alert("Data saved to " + vocabData + "!");
}
function loadData() {
  const storedData = localStorage.getItem(vocabData);
  // Clear existing rows (except the initial one if you have it)
  while (tbody.rows.length > 0) {
    tbody.deleteRow(0); 
  }
  if (storedData) {
    const data = JSON.parse(storedData);

    data.forEach(item => {
      const newRow = tbody.insertRow();
      const wordCell = newRow.insertCell();
      const meaningCell = newRow.insertCell();
      const buttonCell = newRow.insertCell();
      
      buttonCell.classList.add("container");

      wordCell.innerHTML = '<input type="text" name="word[]" value="' + item.word + '">';
      meaningCell.innerHTML = '<input type="text" name="meaning[]" value="' + item.meaning + '">';
      buttonCell.innerHTML = '<button class="controls" onclick="deleteRow(this)">-</button><button class="controls" onclick="addRowBelow(this)">+</button>';
    });
  }else{
    alert(vocabData + " is empty!");
  }
  addRow();
}
function clearData(){
  //localStorage.clear(); //Only for clear all
  localStorage.removeItem(vocabData);
  while (tbody.rows.length > 0) {
    tbody.deleteRow(0); // Always delete the first row until none are left
  }
  addRow();
  alert("Cleared data from " + vocabData + "!");
}

function deleteList(){
  document.getElementById(currentList.value).remove();
  clearData();
}

function collapsibleList(){
  //show or hide collapsible
  collapsibleLists.forEach((list)=>{
    list.classList.toggle("active");
  })
  
  //lists stored previously
  const allLists = Object.keys(localStorage);
  allLists.forEach((list) => {
    if(document.getElementById(list) == null){
      addList(list); 
    }
  });
}
//for test-page
function iterateList(changeIndex){
  const allLists = Object.keys(localStorage);
  const currentIndex = allLists.indexOf(vocabData);
  var nextIndex = currentIndex + changeIndex;
  if (nextIndex < 0){
    nextIndex = allLists.length -1;
  }
  if (nextIndex >= allLists.length){
    nextIndex = 0;
  }
  const nextKey = allLists[nextIndex];
  currentList.value = vocabData = showCurrent.value = nextKey;
}

//test
const startTestBtn = document.getElementById("start-test");
const testStart = document.querySelector(".testStart");
const showAnswer = document.getElementById("show-ans");
const showMeaning = document.getElementById("show-meaning");
const inputLog = document.getElementById("input-log");
const userInput = document.getElementById("user-input");

const testState = document.getElementById("test-state");
const iterateListDiv = document.getElementById("iterate-list");

let myList;
let ans;
let score;
let tries;
function startTest(){
  score = 0;
  tries = 0;
  myList = new Map();
  const storedData = localStorage.getItem(vocabData);
  if(storedData){
    const data = JSON.parse(storedData);
    data.forEach(item => {
      myList.set(item.word,item.meaning);
    });
    
    testState.textContent = "Current test list: " + vocabData; 
    
    iterateListDiv.style.display = "none";
    startTestBtn.style.display = "none";
    testStart.style.display = "block";
    randomWord();
  }else{
    showMeaning.innerHTML = "Your list is empty!";
  }
}
function randomWord(){
  tries = 0; //reset tries
  inputLog.replaceChildren(); //clears log
  if(myList.size > 0){
    const keys = Array.from(myList.keys()); //list of words only
    const randomIndex = Math.floor(Math.random() * keys.length);
    ans = keys[randomIndex]; //random word aka answer
    //const meaning = myList.get(ans); //the corresponding meaning
    
    showMeaning.innerHTML = myList.get(ans);//meaning;
  }else{
    testState.innerHTML = "You have reached the end of '" + vocabData + "'!";
    testStart.style.display = "none";
    iterateListDiv.style.display = "block";
    startTestBtn.style.display = "block";    
  }
}
function submitAnswer(event){
  if(event.key === "Enter"){
    const userAns = userInput.value;
    event.preventDefault();
    const newInput = document.createElement("p");
    newInput.textContent = userAns;
    userInput.value = "";
    inputLog.appendChild(newInput);
    tries++;
    if(userAns === ans){
      newInput.style.color = "green";
      myList.delete(ans); //remove word from test
      //show correct
      if(tries<=1){
        score++;
      }
      testState.textContent = "Score: " + score;
      randomWord(); 
    }else{
      newInput.style.color = "red";
      testState.textContent = "Score: " + score + "     Tries: " + tries;
    }
    inputLog.scrollTop = inputLog.scrollHeight;
  }
}
function endTest(){
  testState.textContent = "You have ended the test";
  testStart.style.display = "none";
  iterateListDiv.style.display = "block";
  startTestBtn.style.display = "block";    
}

function showAns(){
  showAnswer.textContent = ans;
}
function hideAns(){
  showAnswer.textContent = "Show Answer";
}
