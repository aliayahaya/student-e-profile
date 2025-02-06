document.addEventListener("DOMContentLoaded", function () {
    fetch("profiles.json") // Load the JSON file
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            let profileList = document.getElementById("profile-list");
            data.forEach(profile => {
                profileList.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card w-150 h-100 shadow-sm">
                            <img src="${profile.image}" alt="${profile.name}" class="profile-image"> 
                            <h3 class="card-body">${profile.name}</h3>
                            <div class="card-body">
                                <p><strong>ID:</strong> ${profile.student_id}</p>
                                <a href="profile.html?id=${profile.id}"  class="custom-btn">View Profile</a>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error loading profiles:", error));
});
