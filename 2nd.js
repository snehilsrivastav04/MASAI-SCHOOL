// Initialize the numbers array
let numbers = [5, 3, 8, 1, 2];

console.log("Initial array:", numbers);

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
}

// Function to remove a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// Function to sort the numbers in the array
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum of the numbers in the array
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of the numbers in the array
function calculateAverage(array) {
    return calculateSum(array) / array.length;
}

// Demonstrate the use of each function and display the results

// Add a number
addNumber(numbers, 4);
console.log("After adding 4:", numbers);

// Remove a number
removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

// Sort the numbers
let sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

// Calculate the sum of the numbers
let sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

// Calculate the average of the numbers
let average = calculateAverage(numbers);
console.log("Average of numbers:", average);
