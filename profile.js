document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = urlParams.get("id");

    fetch("profiles.json")
        .then(response => response.json())
        .then(data => {
            let profile = data.find(p => p.id == profileId);
            if (profile) {
                // Create an image element and add the custom class
                const imgElement = document.createElement("img");
                imgElement.src = profile.image;
                imgElement.alt = profile.name;
                imgElement.classList.add("profile-image"); // Add the custom profile-image class

                // Update profile details
                document.getElementById("profile-details").innerHTML = `
                    ${imgElement.outerHTML} <!-- Insert the image here -->
                    <h2>${profile.name}</h2>
                    <p><strong>ID:</strong> ${profile.student_id}</p>
                    <p><strong>Birthdate:</strong> ${profile.dob}</p>
                    <p><strong>Gender:</strong> ${profile.gender}</p>
                    <p><strong>Phone:</strong> ${profile.phone}</p>
                    <p><strong>Email:</strong> ${profile.email}</p>
                    <p><strong>Address:</strong> ${profile.address}</p>
                    <p><strong>Campus:</strong> ${profile.campus}</p>
                    <p><strong>Course:</strong> ${profile.course}</p>
                    <p><strong>Current Semester:</strong> ${profile.current_semester}</p>
                    <p><strong>CGPA:</strong> ${profile.cgpa}</p>
                    <p><strong>Advisor:</strong> ${profile.advisor}</p>
                    <a href="list.html" class="custom-btn">Back to Profiles</a>
                `;
            } else {
                document.getElementById("profile-details").innerHTML = "<p>Profile not found.</p>";
            }
        })
        .catch(error => console.error("Error loading profile:", error));
});
