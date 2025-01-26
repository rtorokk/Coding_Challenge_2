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