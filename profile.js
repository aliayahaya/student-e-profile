document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = urlParams.get("id");

    fetch("profiles.json")
        .then(response => response.json())
        .then(data => {
            let profile = data.find(p => p.id == profileId);
            if (profile) {
                // Create an image element and the custom class
                const imgElement = document.createElement("img");
                imgElement.src = profile.image;
                imgElement.alt = profile.name;
                imgElement.classList.add("profile-image");

                // Create the table
                const table = document.createElement("table");
                table.classList.add("profile-table"); // Custom class for styling

                // Profile details
                const details = [
                    { label: "ID", value: profile.student_id },
                    { label: "Birthdate", value: profile.dob },
                    { label: "Gender", value: profile.gender },
                    { label: "Phone", value: profile.phone },
                    { label: "Email", value: profile.email },
                    { label: "Address", value: profile.address },
                    { label: "Campus", value: profile.campus },
                    { label: "Course", value: profile.course },
                    { label: "Current Semester", value: profile.current_semester },
                    { label: "CGPA", value: profile.cgpa },
                    { label: "Advisor", value: profile.advisor }
                ];

                details.forEach(detail => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td><strong>${detail.label}</strong></td>
                        <td>${detail.value}</td>
                    `;
                    table.appendChild(row);
                });

                // Append everything to the profile-details container
                const profileContainer = document.getElementById("profile-details");
                profileContainer.innerHTML = ""; // Clear existing content
                profileContainer.appendChild(imgElement);
                profileContainer.innerHTML += `<h2>${profile.name}</h2>`;
                profileContainer.appendChild(table);
                profileContainer.innerHTML += `<a href="list.html" class="custom-btn">Back to Profiles</a>`;

            } else {
                document.getElementById("profile-details").innerHTML = "<p>Profile not found.</p>";
            }
        })
        .catch(error => console.error("Error loading profile:", error));
});
