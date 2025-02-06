document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = urlParams.get("id");

    fetch("profiles.json")
        .then(response => response.json())
        .then(data => {
            let profile = data.find(p => p.id == profileId);
            if (profile) {
                document.getElementById("profile-details").innerHTML = `
                    <img src="${profile.image}" alt="${profile.name}">
                    <h2>${profile.name}</h2>
                    <p><strong>Student ID:</strong> ${profile.student_id}</p>
                    <p><strong>Program:</strong> ${profile.program}</p>
                    <p><strong>Email:</strong> ${profile.email}</p>
                    <a href="index.html">Back to Profiles</a>
                `;
            } else {
                document.getElementById("profile-details").innerHTML = "<p>Profile not found.</p>";
            }
        })
        .catch(error => console.error("Error loading profile:", error));
});