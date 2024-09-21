const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function populateIngredients() {
  const ulElement = document.getElementById("ingredients");
  const fragment = document.createDocumentFragment();

  ingredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    fragment.appendChild(li);
  });

  ulElement.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", populateIngredients);