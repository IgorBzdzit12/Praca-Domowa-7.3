//Zadanie 1

function analyzeCategories() {
    const categories = document.querySelectorAll("#categories .item");
    console.log(`Number of categories: ${categories.length}`);
  
    categories.forEach(category => {
      const title = category.querySelector("h2").textContent;
      const itemsCount = category.querySelectorAll("ul > li").length;
      console.log(`Category: ${title}, Number of items: ${itemsCount}`);
    });
  }
  
  document.addEventListener("DOMContentLoaded", analyzeCategories);
  
  