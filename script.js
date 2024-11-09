

function OnSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#image").attr("src", profile.getImageUrl());
    $("#email").text(profile.getEmail());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully.");
        console.log("User signed out.");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}
