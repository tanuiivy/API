document.getElementById('profileForm').addEventListener('submit', function(event) {
    // handling default form submission behavior
    event.preventDefault();

    // Get inputs from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;
    const photo = document.getElementById('photo').files[0]; // Profile photo

    // Validation
    if (name === '' || age === '') {
        document.getElementById('formError').innerText = 'Name and Age are required!';
        document.getElementById('formError').style.display = 'block';
        return;
    } else {
        document.getElementById('formError').style.display = 'none';
    }

    // Update the DOM with form values
    document.getElementById('displayName').innerText = 'Name: ' + name;
    document.getElementById('displayAge').innerText = 'Age: ' + age;
    document.getElementById('displayBio').innerText = 'Bio: ' + bio;

    // Handle profile picture upload and display
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(photo); // Convert photo to a data URL for display
    } else {
        document.getElementById('profileImage').src = ''; // Default or empty image
    }

    // Show the profile card and hide the form
    document.getElementById('profileCard').style.display = 'block';
    document.getElementById('profileForm').style.display = 'none';
});

// Re-editing of the profile
document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('profileCard').style.display = 'none';
    document.getElementById('profileForm').style.display = 'block';
});

// Bio data visibility
document.getElementById('toggleBioBtn').addEventListener('click', function() {
    const bioElement = document.getElementById('displayBio');
    if (bioElement.style.display === 'none') {
        bioElement.style.display = 'block';
        this.innerText = 'Hide Bio';
    } else {
        bioElement.style.display = 'none';
        this.innerText = 'Show Bio';
    }
});

// Real-time form validation (change input background color based on validity)
document.getElementById('name').addEventListener('input', function() {
    if (this.value.trim() === '') {
        this.style.backgroundColor = 'pink';
    } else {
        this.style.backgroundColor = 'lightgreen';
    }
});