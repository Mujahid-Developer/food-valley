const spinner = document.getElementById("spinner");
const loadData = () => {
  const inputValue = document.getElementById("inputValue").value;
  cardContainer.innerHTML  = " ";
  spinner.removeAttribute("hidden");
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      spinner.setAttribute("hidden", "");
      showSearchResults(data.meals);
    });
  inputValue.value = " ";
};
const cardContainer = document.getElementById("card-addon");
const showSearchResults = (meals) => {
  meals.forEach((item) => {
   const div = document.createElement("div");
   div.classList.add("col");
    div.innerHTML = `
        <div class="card">
          <img src="${item.strMealThumb}" class="card-img-top w-100" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.strMeal}</h5>
            <p class="card-text">${item.strInstructions.slice(0, 200)}</p>
          </div>
        </div>`;
    cardContainer.appendChild(div);
  });
};
