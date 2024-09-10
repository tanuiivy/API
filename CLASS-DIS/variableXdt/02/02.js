// Function to convert a string to a number, add 10, and display the result
function convertAndAdd() {
    // Get the value from the input field (this will be a string)
    var stringValue = document.getElementById('number').value;

    // Convert the string to a number using parseFloat
    var numberValue = parseFloat(stringValue);

    // Get the element to display the result
    var resultElement = document.getElementById('result');

    // Check if the conversion was successful
    if (!isNaN(numberValue)) {
        // Add 10 to the number
        var result = numberValue + 10;

        // Display the result in the result element
        resultElement.textContent = 'Result: ' + result;
    } else {
        // Display an error message if the conversion failed
        resultElement.textContent = 'Invalid input: not a number';
    }
}
