// ==================================================
// JAVASCRIPT BASICS PROJECT
// ==================================================
//
// JavaScript controls behaviour and interaction.
//
// ==================================================


// =========================
// 1. VARIABLES
// =========================

// const creates a variable that cannot be reassigned.
const projectName = "Learning Dashboard";

// let creates a variable whose value can change.
let count = 0;


// =========================
// 2. SELECTING HTML ELEMENTS
// =========================

// querySelector finds the first element matching a CSS selector.
//
// "#" means ID.
// "." means class.
//
// This finds:
// <span id="count">
const countDisplay = document.querySelector("#count");

const increaseButton = document.querySelector("#increaseButton");
const decreaseButton = document.querySelector("#decreaseButton");
const resetButton = document.querySelector("#resetButton");


// =========================
// 3. FUNCTIONS
// =========================

// A function is a reusable block of code.

function updateCount() {
    // textContent changes the text inside an HTML element.
    countDisplay.textContent = count;
}


// =========================
// 4. EVENT LISTENERS
// =========================

// addEventListener tells JavaScript to wait for an event.
//
// "click" means the user clicked the element.

increaseButton.addEventListener("click", function () {
    count = count + 1;

    updateCount();
});


decreaseButton.addEventListener("click", function () {
    count = count - 1;

    updateCount();
});


resetButton.addEventListener("click", function () {
    count = 0;

    updateCount();
});


// ==================================================
// 5. ARRAYS AND OBJECTS
// ==================================================

// An array stores multiple values.

let tasks = [];

// An object stores related pieces of information.

const exampleTask = {
    name: "Learn JavaScript",
    completed: false
};


// ==================================================
// 6. FORM + DOM MANIPULATION
// ==================================================

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");


// Listen for the form being submitted.

taskForm.addEventListener("submit", function (event) {

    // Prevents the browser from refreshing the page.
    event.preventDefault();

    // Get the text the user typed.
    const taskName = taskInput.value.trim();

    // If the input is empty, stop here.
    if (taskName === "") {
        return;
    }

    // Add a new object to the tasks array.
    tasks.push({
        name: taskName,
        completed: false
    });

    // Display the updated list.
    renderTasks();

    // Clear the input field.
    taskInput.value = "";
});


// ==================================================
// 7. FUNCTION WITH AN ARRAY
// ==================================================

function renderTasks() {

    // Clear the existing HTML list.
    taskList.innerHTML = "";

    // forEach runs code once for every item in an array.
    tasks.forEach(function (task, index) {

        // Create a new <li> element.
        const listItem = document.createElement("li");

        // Put the task name inside it.
        listItem.textContent = task.name;

        // If completed, add the CSS class.
        if (task.completed === true) {
            listItem.classList.add("completed");
        }

        // Clicking a task toggles completed true/false.
        listItem.addEventListener("click", function () {

            task.completed = !task.completed;

            renderTasks();
        });

        // Add a delete button.
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function (event) {

            // Stops this click from also triggering the list item's click.
            event.stopPropagation();

            // Remove one item from the array.
            tasks.splice(index, 1);

            renderTasks();
        });

        // Put the button inside the list item.
        listItem.appendChild(deleteButton);

        // Put the list item into the <ul>.
        taskList.appendChild(listItem);
    });
}


// ==================================================
// 8. FORM VALIDATION EXAMPLE
// ==================================================

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // && means AND.
    if (name !== "" && email !== "") {

        formMessage.textContent =
            `Thanks ${name}! Your message has been received.`;

        formMessage.style.color = "green";

    } else {

        formMessage.textContent =
            "Please enter your name and email.";

        formMessage.style.color = "red";
    }
});


// ==================================================
// 9. CONSOLE.LOG
// ==================================================

// console.log is useful for debugging.

console.log("JavaScript is running!");
console.log("Project:", projectName);


// ==================================================
// 10. BASIC OPERATORS
// ==================================================

// Arithmetic
const addition = 10 + 5;
const subtraction = 10 - 5;
const multiplication = 10 * 5;
const division = 10 / 5;

// Comparison
const isEqual = 10 === 10;
const isGreater = 10 > 5;
const isLess = 5 < 10;

// Logical operators
const bothTrue = true && true;
const eitherTrue = true || false;
const notTrue = !true;


// ==================================================
// 11. TEMPLATE LITERALS
// ==================================================

// Backticks allow variables to be inserted with ${}.

const userName = "Ryan";

const greeting = `Hello, ${userName}!`;

console.log(greeting);


// ==================================================
// 12. ARROW FUNCTIONS
// ==================================================

// This:

function add(a, b) {
    return a + b;
}

// Can also be written:

const addNumbers = (a, b) => {
    return a + b;
};

console.log(add(2, 3));
console.log(addNumbers(2, 3));
