document.addEventListener("DOMContentLoaded", function() {
    // 1. Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
    setTimeout(function() {
        const profilePic = document.querySelector("#profile-pic");
        profilePic.src = "img/IMG_0543.JPG";
    }, 2000);

    // 2. Four seconds after the page loads, use innerHTML to change the name in "profile-name".
    setTimeout(function() {
        const profileName = document.querySelector("#profile-name");
        profileName.innerHTML = "Jane Doe";
    }, 4000);

    // 3. Six seconds after the page loads, add a new class to "profile-desc" that changes the color and font of the description text.
    setTimeout(function() {
        const profileDesc = document.querySelector("#profile-desc");
        profileDesc.classList.add("highlight-description");
    }, 6000);

    // 4. Use setInterval to toggle a class on the "profile-card" that changes its background color every two seconds.
    const colors = ["#712e8c", "#33FF57", "#5733FF"]; // Array of colors
    let colorIndex = 0;

    function toggleBackgroundColor() {
        const profileCard = document.querySelector("#profile-card");
        profileCard.classList.toggle("alternate-background");
        colorIndex = (colorIndex + 1) % colors.length;
        profileCard.style.backgroundColor = colors[colorIndex];
    }

    setInterval(toggleBackgroundColor, 2000);

    // Bonus: Encapsulate all timers in a single function.
    function executeTimers() {
        // ... code from the setTimeouts above ...
    }

    // Bonus: Instead of toggling the background color every two seconds, programmatically change the background color.
    let colorChangeIndex = 0;

    function changeBackgroundColor() {
        const profileCard = document.querySelector("#profile-card");
        colorChangeIndex = Math.floor(Math.random() * colors.length);
        profileCard.style.backgroundColor = colors[colorChangeIndex];
    }

    setInterval(changeBackgroundColor, 2000);

    // Bonus: After all timers have expired, bring up a prompt to change "profile-name" text based on user input.
    setTimeout(function() {
        const userInput = prompt("Enter a new name for the profile:");
        const profileName = document.querySelector("#profile-name");
        profileName.innerHTML = userInput || "Default Name";
    }, 8000);
});
