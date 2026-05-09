// Log When Form Submits
console.log("App is running!");

//How to create an empty array to hold data
let customers = [];

const form = document.getElementById("customer-form");
// check if form exist
if (!form) {
  console.error("Form not found! Check your HTML.");
}

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

  // MEMORIZE: Objects hold related data
  // MEMORIZE: Date.now() creates a unique number (good for IDs)
  const newCustomer = {
    id: Date.now(),
    name: name,
    email: email,
  };

  // MEMORIZE: .push() adds an item to an array
  customers.push(newCustomer);

  // MEMORIZE: Log the whole array to see what's inside
  console.log("current customers:", customers);

  //MEMORIZE: Call displayCustomers AFTER changing the array
  displayCustomers();

  // MEMORIZE: Clear input by setting .value to empty string
  document.getElementById("customer-name").value = "";
  document.getElementById("customer-email").value = "";

  // Add to Array
  console.log("App is running!");
});
// End of submit function

// Create Display Function

// MEMORIZE: Functions group code that does a specific job
// MEMORIZE: This function's job is to show customers on screen
function displayCustomers() {
  // MEMORIZE: Get the container where cards will go
  const container = document.getElementById("customerList");

  // MEMORIZE: .innerHTML = "" clears everything inside an element
  container.innerHTML = "";
  // MEMORIZE: for loop repeats code for each item in array
  // i starts at 0, runs while i < length, increases by 1 each time
  for (let i = 0; i < customers.length; i++) {
    // MEMORIZE: Get the current customer from array
    const customer = customers[1];
    const card = document.createElement("div");

    //  MEMORIZE: .textContent sets the text inside an element
    card.textContent = "Customer Name Here";

    // MEMORIZE: Create a button for deleting
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    // MEMORIZE: setAttribute stores data on an element
    // MEMORIZE: "data-id" is common way to store IDs on buttons
    deleteBtn.setAttribute("data-id", customer.id);

    card.appendchild(deleteBtn);

    //  MEMORIZE: appendChild adds the element to the page
    container.appendChild(card);
  }
}

// MEMORIZE: Event delegation - listen on parent, check what was clicked
const container = document.getElementById("customerList");
container.addEventListener("Click", function (event) {
  // MEMORIZE: event.target is the actual element clicked
  // MEMORIZE: .tagName tells you what type of element (BUTTON, DIV, etc)
  if (event.target.tagName === "BUTTON") {
    const idToDelete = Number(event.target.getAttribute("data-id"));

    // MEMORIZE: .filter creates a new array without certain items
    // MEMORIZE: arrow function (item => condition)
    // MEMORIZE: Keep item if its id does NOT match the one to delete
    customers = customers.filter((customer) => customer.id !== IdToDelete);

    // MEMORIZE: You MUST call the function for it to run
    displayCustomers();
  }
});

displayCustomers();
