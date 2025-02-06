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
                        <a href="list.html?id=${profile.id}">View Profile</a>
                        </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error loading profiles:", error));
});
