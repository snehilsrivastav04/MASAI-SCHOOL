// Define the Item class
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Function to add an item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
    let item = getItem(inventory, id);
    if (item) {
        Object.assign(item, newDetails);
    }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

// Function to get an item by id
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

// Function to print the inventory
function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

// Example usage
let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

// Adding an item
addItem(inventory, new Item(3, 'Orange', 15, 0.7));
console.log("\nAdding item:");
printInventory(inventory);

// Updating an item
updateItem(inventory, 2, { quantity: 30 });
console.log("\nUpdating item:");
printInventory(inventory);

// Deleting an item
deleteItem(inventory, 2);
console.log("\nDeleting item:");
printInventory(inventory);
