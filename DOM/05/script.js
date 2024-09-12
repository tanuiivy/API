let posts = [];

document.getElementById('submitPost').addEventListener('click', function() {
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;
    const category = document.getElementById('categoryInput').value;

    if (title && content) {
        const newPost = { title, content, category };
        posts.push(newPost);
        displayPosts();
    }
});


document.getElementById('filterCategory').addEventListener('change', function() {
    displayPosts();
});

function displayPosts() {
    const postListElement = document.getElementById('postList');
    const selectedCategory = document.getElementById('filterCategory').value;

    // Clear the existing posts in the list
    postListElement.innerHTML = '';

    // Filter posts based on selected category
    const filteredPosts = posts.filter(post => {
        return selectedCategory === 'All' || post.category === selectedCategory;
    });

    // Display the filtered posts
    filteredPosts.forEach(post => {
        const li = document.createElement('li');
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        const postCategory = document.createElement('small');
        postCategory.textContent = `Category: ${post.category}`;

        li.appendChild(postTitle);
        li.appendChild(postContent);
        li.appendChild(postCategory);

        postListElement.appendChild(li);
    });
}