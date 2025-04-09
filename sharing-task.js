const readline = require('readline-sync');

/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================
// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


function generateBadge(name, role) {
    if (!name) name = readline.question("What is your name? ");
    if (!role) role = readline.question("What is your role? ");


    let newRole = role.charAt(0).toUpperCase() + role.slice(1);
    return console.log(`Name: ${name}, Role: ${newRole}`);
}



// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

function eventCost(attendees, cost) {
    if (!attendees) attendees = readline.question("How many people are attending? ");
    if (!cost) cost = readline.question("What is the cost per person? ");
   
    let totalCost = attendees * cost;
        if (attendees > 100) {
            totalCost *= .9;
        }
   
    return totalCost;
}



// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

function validateEmail(email)
{
    if (!email) email = readline.question("What is your email? ");
   
    let isValid = false;
   
    do{
        if (email.includes("@") && email.includes(".")) {
            return true;
        }
        else
            email = readline.question("Please enter a valid email address. ");
    } while (!isValid);

}
// Testcase 1
generateBadge('Alice','speaker');

// Testcase 2
let cost = eventCost(0,0);
console.log(cost);

// Testcase 3
let result = validateEmail("");
console.log(result);
