let ingredientCount = 1; // Untuk menghitung jumlah bahan
let stepCount = 1; // Untuk menghitung jumlah langkah

// Navigation menu
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".navigation-container").classList.toggle("active");
    console.log("oke");
  });

// Footer year
document.querySelector("#getYear").innerHTML = new Date().getFullYear();

// Add Recipe
function addIngredient() {
  ingredientCount++; // Increment count
  const ingredientsList = document.getElementById("ingredientsList");
  const newIngredientItem = document.createElement("div");
  newIngredientItem.className = "ingredient-item";
  newIngredientItem.innerHTML = `
        <span class="ingredient-number">${ingredientCount}.</span>
        <input type="text" class="ingredient" required />
    `;
  ingredientsList.appendChild(newIngredientItem);
}

function addStep() {
  stepCount++; // Increment count
  const stepsList = document.getElementById("stepsList");
  const newStepItem = document.createElement("div");
  newStepItem.className = "step-item";
  newStepItem.innerHTML = `
        <span class="step-number">${stepCount}.</span>
        <input type="text" class="step normal-font-size" required />
    `;
  stepsList.appendChild(newStepItem);
}

document.getElementById("image").addEventListener("change", function (event) {
  const previewContainer = document.getElementById("image-preview-container");
  previewContainer.innerHTML = ""; // Clear previous previews

  Array.from(event.target.files).forEach((file, index) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Create preview element
      const previewElement = document.createElement("div");
      previewElement.classList.add("image-preview");

      // Create image element
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = `Preview ${index + 1}`;
      previewElement.appendChild(img);

      // Create remove button
      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-button");
      removeButton.innerHTML = '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
      removeButton.addEventListener("click", () => {
        const filesArray = Array.from(event.target.files);
        filesArray.splice(index, 1);
        const newFileList = new DataTransfer();
        filesArray.forEach((file) => newFileList.items.add(file));
        event.target.files = newFileList.files;
        previewElement.remove();
      });

      previewElement.appendChild(removeButton);
      previewContainer.appendChild(previewElement);
    };

    reader.readAsDataURL(file);
  });
});
