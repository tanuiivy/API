// Function to calculate the area of a rectangle
function calculateArea() {
    // Get the length and width from the input fields
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    
    // Get the element to display the result
    var resultElement = document.getElementById('result');
    
    // Check if length and width are valid numbers
    if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
        // Calculate the area
        var area = length * width;
        
        // Display the result in the result element
        resultElement.textContent = 'Area: ' + area;
    } else {
        // Display an error message if inputs are invalid
        resultElement.textContent = 'Please enter valid positive numbers for length and width.';
    }
}
