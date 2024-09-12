// Initialize an empty array to store items added to the order
let orderList = [];

// Initialize a variable to track the total price of the order
let totalPrice = 0;

// Get all the buttons with the class 'add-to-order' using querySelectorAll
// This selects all elements with the 'add-to-order' class
const addToOrderButtons = document.querySelectorAll('.add-to-order');

// Get the HTML element with the ID 'orderList' where order items will be displayed
const orderListElement = document.getElementById('orderList');

// Get the HTML element with the ID 'totalPrice' where the total price will be displayed
const totalPriceElement = document.getElementById('totalPrice');

// Get the HTML element with the ID 'reviewList' where reviews will be displayed
const reviewListElement = document.getElementById('reviewList');

// Loop through each button in the 'add-to-order' list and attach a click event listener
addToOrderButtons.forEach(button => {
    button.addEventListener('click', function() {

        // Get the parent element of the clicked button (the menu item container)
        const menuItem = this.parentElement;

        // Get the text content of the <p> element inside the menuItem (the item name)
        const itemName = menuItem.querySelector('p').textContent;

        // Get the value of the 'data-price' attribute of the menuItem and convert it to a number
        const itemPrice = parseFloat(menuItem.getAttribute('data-price'));

        // Add the selected item (name and price) to the orderList array
        orderList.push({ name: itemName, price: itemPrice });

        // Call the updateOrder function to refresh the displayed order and total price
        updateOrder();
    });
});

// Define a function that updates the displayed order list and total price
function updateOrder() {
    // Clear the current content of the 'orderListElement' (reset the order display)
    orderListElement.innerHTML = '';

    // Loop through each item in the orderList and create a new <li> element for it
    orderList.forEach(item => {
        const li = document.createElement('li');
        // Set the text of the list item to the name of the ordered item
        li.textContent = item.name;
        // Append the list item to the 'orderListElement' (add it to the DOM)
        orderListElement.appendChild(li);
    });

    // Calculate the total price by summing the price of each item in the orderList
    totalPrice = orderList.reduce((sum, item) => sum + item.price, 0);

    // Update the displayed total price in the 'totalPriceElement' and format it to 2 decimal places
    totalPriceElement.textContent = totalPrice.toFixed(2); // .toFixed(2) ensures 2 decimal places
}

// Handle review submission when the 'submitReview' button is clicked
document.getElementById('submitReview').addEventListener('click', function() {

    // Get the value of the review text from the input field with ID 'reviewInput'
    const reviewInput = document.getElementById('reviewInput');
    const reviewText = reviewInput.value;

    // Check if the review text is not empty (trim removes spaces from the beginning and end)
    if (reviewText.trim() !== '') {
        // Create a new <li> element to display the review
        const li = document.createElement('li');
        // Set the text content of the list item to the review text
        li.textContent = reviewText;
        // Append the new review to the 'reviewListElement'
        reviewListElement.appendChild(li);

        // Clear the review input field after the review is submitted
        reviewInput.value = '';
    }
});

// Handle order placement when the 'placeOrder' button is clicked
document.getElementById('placeOrder').addEventListener('click', function() {
    // Display an alert showing the total price of the order, formatted to 2 decimal places
    alert(`Order placed! Total: $${totalPrice.toFixed(2)}`);

    // Clear the order by resetting the orderList to an empty array
    orderList = [];
    
    // Call the updateOrder function to refresh the order display and reset the total price
    updateOrder();
});
