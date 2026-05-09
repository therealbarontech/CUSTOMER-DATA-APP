// Log When Form Submits
console.log("App is running!");
let customers = [];

// Get Input Value

// MEMORIZE: addEventListener waits for user action (submit, click, etc)
// MEMORIZE: "submit" is for forms, "click" is for buttons
form.addEventListener("submit", function (event) {
  // MEMORIZE: preventDefault stops page from refreshing
  // ALWAYS use this on form submits
  event.preventDefault();

  // MEMORIZE: console.log shows messages in developer tools
  console.log("Form was submitted!");
});

//Get Input Value
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // MEMORIZE: .value gets what user typed in an input
  const name = document.getElementById("customer-name").value;
  const email = document.getElementById("customer-email").value;

  // MEMORIZE: You can log variables too
  console.log("User entered:", name, email);
});

// // Add to Array
// console.log("App is running!");
// let customers = [];

// const form = document.getElementById("customer-form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const name = document.getElementById("customer-name").value;

//   // MEMORIZE: Objects hold related data
//   // MEMORIZE: Date.now() creates a unique number (good for IDs)
//   const newCustomer = {
//     id: Date.now(),
//     name: name,
//   };

//   // MEMORIZE: .push() adds an item to an array
//   customers.push(newCustomer);

//   // MEMORIZE: Log the whole array to see what's inside
//   console.log("current customers:", customers);

//   // MEMORIZE: Clear input by setting .value to empty string
//   document.getElementById("customer-name").value = "";
// });

// // Create Display Function
// // MEMORIZE: Functions group code that does a specific job
// // MEMORIZE: This function's job is to show customers on screen
// function displayCustomers() {
//   // MEMORIZE: Get the container where cards will go
//   const container = document.getElementById("customers-container");
//   // MEMORIZE: .innerHTML = "" clears everything inside an element
//   container.innerHTML = "";
// }
