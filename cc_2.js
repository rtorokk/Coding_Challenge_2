// Task 1 - Store Inventory
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
products.push("Tablet"); // Add a new product
products.pop(); // Remove the last product
console.log("Updated Product list: ", products);

// Task 2 - Student Scores
let scores = [88, 94, 78, 99, 80];
scores[1] =90; // Update the second score
// Calculate the average score
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
// Display the updated scores and average
console.log("Updated scores: ", scores);
console.log("Average score: ", average);

// Task 3 - Employee Records
let employees = {
    name: "John Doe",
    age : 30,
    department: "IT",
    isActive: true
};
employees.department = "HR"; // Update department
employees.position = "Manager"; // Add a new property
// Display the updated employee record
console.log("Updated employee record: ", employees);

// Task 4 - Customer Database
let customers = [
   { name: "Alice", email: "alice@example.com", purchaseAmount: 200 },
   { name: "Bob", email: "bob@example.com", purchaseAmount: 150 },
   { name: "Charlie", email: "charlie@example", purchaseAmount: 100 },
 ]; 
 // Update the purchase amount of the second customer
customers.push({ name: "David", email: "david@example.com", purchaseAmount: 300 }); // Add a new customer
// Display the updated customer list
console.log("Customer list: ", customers);