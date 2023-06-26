
// Define the candidate data (replace this with your own data)
const candidates = [
    { name: "John Doe", location: "New York", role: "Software Engineer", profileImage: "https://via.placeholder.com/100" },
    { name: "Jane Smith", location: "San Francisco", role: "Web Developer", profileImage: "https://via.placeholder.com/100" },
    { name: "Bob Johnson", location: "Chicago", role: "Data Analyst", profileImage: "https://via.placeholder.com/100" },
    { name: "Alice Williams", location: "New York", role: "UI/UX Designer", profileImage: "https://via.placeholder.com/100" },
    { name: "Mike Brown", location: "Los Angeles", role: "Project Manager", profileImage: "https://via.placeholder.com/100" },
    { name: "Emily Davis", location: "Seattle", role: "Full Stack Developer", profileImage: "https://via.placeholder.com/100" },
    { name: "David Wilson", location: "Boston", role: "Marketing Manager", profileImage: "https://via.placeholder.com/100" },
    { name: "Sarah Thompson", location: "Austin", role: "Product Manager", profileImage: "https://via.placeholder.com/100" },
    { name: "Michael Clark", location: "Denver", role: "Data Scientist", profileImage: "https://via.placeholder.com/100" },
    { name: "Jessica Roberts", location: "Miami", role: "Graphic Designer", profileImage: "https://via.placeholder.com/100" },
    { name: "Chris Evans", location: "Atlanta", role: "Front-end Developer", profileImage: "https://via.placeholder.com/100" },
    { name: "Olivia Turner", location: "San Diego", role: "Business Analyst", profileImage: "https://via.placeholder.com/100" },
    { name: "Matthew Green", location: "Dallas", role: "Systems Administrator", profileImage: "https://via.placeholder.com/100" },
    { name: "Sophia Martinez", location: "Houston", role: "UX Researcher", profileImage: "https://via.placeholder.com/100" },
    { name: "Daniel Taylor", location: "Philadelphia", role: "Software Developer", profileImage: "https://via.placeholder.com/100" },
    { name: "Ava Hernandez", location: "Phoenix", role: "Network Engineer", profileImage: "https://via.placeholder.com/100" },
    { name: "William Moore", location: "Portland", role: "Digital Marketer", profileImage: "https://via.placeholder.com/100" },
    { name: "Ella Lopez", location: "Nashville", role: "UI Designer", profileImage: "https://via.placeholder.com/100" },
    { name: "James Baker", location: "Detroit", role: "Software Engineer", profileImage: "https://via.placeholder.com/100" },
    { name: "Scarlett Hill", location: "Raleigh", role: "Data Analyst", profileImage: "https://via.placeholder.com/100" }
];

// Get references to the search input, search button, and candidates list
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const candidatesList = document.getElementById("candidatesList");

// Function to filter candidates based on location and job role
function filterCandidates() {
  // Clear the candidates list
  candidatesList.innerHTML = "";

  // Get the search query
  const query = searchInput.value.toLowerCase();

  // Filter the candidates based on the search query
  const filteredCandidates = candidates.filter(candidate => {
    const locationMatch = candidate.location.toLowerCase().includes(query);
    const roleMatch = candidate.role.toLowerCase().includes(query);
    return locationMatch || roleMatch;
  });

  // Create HTML elements for each filtered candidate and append them to the candidates list
  filteredCandidates.forEach(candidate => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const profileImage = document.createElement("img");
    profileImage.src = candidate.profileImage;

    const name = document.createElement("h3");
    name.textContent = candidate.name;

    const details = document.createElement("p");
    details.textContent = `${candidate.role} - ${candidate.location}`;

    cardContent.appendChild(profileImage);
    cardContent.appendChild(name);
    cardContent.appendChild(details);
    card.appendChild(cardContent);
    candidatesList.appendChild(card);
  });
}

// Add event listener to the search button
searchButton.addEventListener("click", filterCandidates);

// Add event listener to the search input for real-time filtering
searchInput.addEventListener("input", filterCandidates);

// Initial filtering when the page loads
filterCandidates();


// LOGIN SCRIPT

document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
  console.log("yes")
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});