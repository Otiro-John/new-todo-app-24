///collect variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//add function to the button when it is clicked
function addTask(){
    //check input if it is empty when the button is clicked the display the message
    if(inputBox.value === ''){
        alert("You must write something");
    }
    ///if the input section is not empty execute the following function
    else{
        //create a new list 
        let li = document.createElement("li");
        //the value of the list will come from the input value
        li.innerHTML = inputBox.value;
        //add the new lis to the lis container
        listContainer.appendChild(li);
///create another elementto delete the completed task in the lists
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        ///the list will display the newly created element
        li.appendChild(span);
        
    }
    //make the input field empty after the add button is added
    inputBox.value = '';
    //the data willl be  saved after the task is added in the list
    saveData();
}
//add a clickable event to the listcontainer
listContainer.addEventListener("click", (e) => {
    //this shows if the list is clicked it should execute the neede function
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        //datais saved after every function that is called
        saveData();
    }
    //if the span element is clicked the needed function should be executed
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        //save the new data
        saveData();
    }
}, false);
//creating a function that saves data in the local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
//creating a function that shows data even if the browser is refreshed or when the 
//listcontainer is updated by either deletion or addition
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();













