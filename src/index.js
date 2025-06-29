
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const dogImageContainer = document.getElementById("dog-image-container");
  const breedList = document.getElementById("dog-breeds");
  const breedDropdown = document.getElementById("breed-dropdown");
  let allBreeds = [];

  // Challenge 1: Fetch and display random dog images
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Random dog";
        img.style.width = "200px";
        img.style.margin = "10px";
        dogImageContainer.appendChild(img);
      });
    });

  // Challenge 2: Fetch and display all dog breeds
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      allBreeds = Object.keys(data.message);
      renderBreeds(allBreeds);
    });

  // Helper function to render breed list
  function renderBreeds(breeds) {
    breedList.innerHTML = ""; // Clear existing breeds
    breeds.forEach((breed) => {
      const li = document.createElement("li");
      li.textContent = breed;
      li.style.cursor = "pointer";

      // Challenge 3: Click to change color
      li.addEventListener("click", () => {
        li.style.color = "blue";
      });

      breedList.appendChild(li);
    });
  }

  // Challenge 4: Filter breeds by first letter
  breedDropdown.addEventListener("change", (e) => {
    const selectedLetter = e.target.value;
    const filteredBreeds = allBreeds.filter((breed) =>
      breed.startsWith(selectedLetter)
    );
    renderBreeds(filteredBreeds);
  });
});
console.log('%c HI', 'color: firebrick')