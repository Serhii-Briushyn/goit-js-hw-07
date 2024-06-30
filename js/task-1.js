const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector(".categories-title").textContent;
  const elementsCount = item.querySelectorAll(".categories-item").length;
  console.log(`Category: ${categoryTitle}\nElements: ${elementsCount}`);
});
