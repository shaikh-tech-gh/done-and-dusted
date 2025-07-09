const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const placeholders = [
    "Add your text",
    "i will do 50 push-up today",
    "write something...",
    "i will study 7 hours today",
    "What do you want to do?",
    "will Drink 5 liter Water Today?",
    "What's your Today's Goal?"
];

let index = 0;

setInterval(() => {
    inputBox.placeholder = placeholders[index];
    index = (index + 1) % placeholders.length;
}, 3000);

function addTask() {
    if (inputBox.value === '') {
        alert('you must write something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();