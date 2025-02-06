document.addEventListener("DOMContentLoaded", function () {
    fetch("profiles.json") // Load the JSON file
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            let profileList = document.getElementById("profile-list");
            data.forEach(profile => {
                profileList.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 shadow-sm">
                        <img src="${profile.image}" alt="${profile.name}">
                        <h3>${profile.name}</h3>
                        <div class="card-body">
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
                        <p><strong>Username:</strong> ${profile.username}</p>
                        <p><strong>Password:</strong> ${profile.password}</p>
                        <a href="profile.html?id=${profile.id}">View Profile</a>
                        </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error loading profiles:", error));
});
