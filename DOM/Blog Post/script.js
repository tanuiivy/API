// Initialize an empty array called 'posts' to store blog post data
let posts = [];

// Add an event listener to the button with the ID 'submitPost' 
// When this button is clicked, it triggers the function to submit the form
document.getElementById('submitPost').addEventListener('click', function() {
    
    // Get the value of the input field with the ID 'titleInput'
    // .value gets the text entered in the field
    const title = document.getElementById('titleInput').value;

    // Get the value of the input field with the ID 'contentInput'
    const content = document.getElementById('contentInput').value;

    // Get the value of the input field with the ID 'categoryInput'
    const category = document.getElementById('categoryInput').value;

    // Check if both title and content have been filled in (truthy values)
    if (title && content) {

        // Create a new object called 'newPost' with the title, content, and category values
        const newPost = { title, content, category };

        // Add the newPost object to the 'posts' array using the .push() method
        // .push() adds the newPost object to the end of the posts array
        posts.push(newPost);

        // Call the displayPosts function to show the newly added post on the page
        displayPosts();
    }
});

// Add an event listener to the category filter dropdown ('filterCategory')
// When the selected category is changed, the displayPosts function is called
document.getElementById('filterCategory').addEventListener('change', function() {
    displayPosts();  // Refresh the displayed posts based on the selected category
});

// Define the function that handles displaying posts
function displayPosts() {
    
    // Get the unordered list element ('postList') where posts will be displayed
    const postListElement = document.getElementById('postList');

    // Get the value of the selected category from the 'filterCategory' dropdown
    const selectedCategory = document.getElementById('filterCategory').value;

    // Clear the existing posts displayed in the post list (reset the list)
    // .innerHTML = '' means setting the HTML content inside the element to an empty string, effectively clearing it
    postListElement.innerHTML = '';

    // Filter the posts array based on the selected category
    const filteredPosts = posts.filter(post => {
        // If the selected category is 'All', display all posts; otherwise, only display posts matching the selected category
        // post.category refers to the category of each post object
        return selectedCategory === 'All' || post.category === selectedCategory;
    });

    // Loop through each post in the filteredPosts array
    filteredPosts.forEach(post => {
        
        // Create a new 'li' (list item) element for each post
        const li = document.createElement('li');
        
        // Create an 'h3' element for the post's title and set its text
        // .textContent sets the text inside the element
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        // Create a 'p' (paragraph) element for the post's content and set its text
        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        // Create a 'small' element for the post's category and set its text
        const postCategory = document.createElement('small');
        postCategory.textContent = `Category: ${post.category}`;

        // Append the title, content, and category elements to the 'li' element
        li.appendChild(postTitle);
        li.appendChild(postContent);
        li.appendChild(postCategory);

        // Finally, append the 'li' element to the 'postList' (the unordered list in the HTML)
        postListElement.appendChild(li);
    });
}
