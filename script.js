function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    document.getElementById("name").innerText = `Name: ${profile.getName()}`;
    document.getElementById("email").innerText = `Email: ${profile.getEmail()}`;
    document.getElementById("image").src = profile.getImageUrl();

    // Show user data and hide the login button
    document.querySelector(".data").style.display = "block";
    document.querySelector(".g-signin2").style.display = "none";
    document.querySelector(".data").classList.add("animated-data"); // Add fade-up animation
}

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        alert("You have been signed out successfully.");

        // Hide user data and show the login button again
        document.querySelector(".data").style.display = "none";
        document.querySelector(".g-signin2").style.display = "flex";
    });
}

// Initialize the Google Auth2 library
function initAuth() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}

window.onload = initAuth;
