//Variables
var letsCookBtn = document.querySelector('.letsCookBtn');
var addRecipeBtn = document.querySelector('.addRecipeBtn');
var sideInput = document.getElementById('side');
var mainDishInput = document.getElementById('mainDish');
var dessertInput = document.getElementById('dessert');
var entireMealInput = document.getElementById('entireMeal');
var food = document.getElementById('foodtxt');
var pot = document.getElementById('cookPot');
var youShouldMake = document.getElementById('maketxt');
// letsCookBtn.disabled = true;

//Event Listeners
letsCookBtn.addEventListener('click', showRandomDish);
addRecipeBtn.addEventListener('click', addRecipe);

//Functions
function selectRandomFoodIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRandomDish() {
  disableLetsCookBtn();
  hideCookPot();
  showFood();
  if (sideInput.checked == true) {
    food.innerText = sides[selectRandomFoodIndex(sides)];
  } else if (mainDishInput.checked == true) {
    food.innerText = mains[selectRandomFoodIndex(mains)];
  } else if (dessertInput.checked == true) {
    food.innerText = desserts[selectRandomFoodIndex(desserts)];
  } else if (entireMealInput.checked == true) {
    food.innerText = [mains[selectRandomFoodIndex(mains)], sides[selectRandomFoodIndex(sides)], desserts[selectRandomFoodIndex(desserts)]];
  }
};

function disableLetsCookBtn() {
  if (sideInput.checked == false && mainDishInput.checked == false && dessertInput.checked == false && entireMealInput.checked == false) {
    // letsCookBtn.disabled = true;
    alert('Please select an input');
    showCookPot();
    hideFood();
  }
};

function hideCookPot() {
  cookPot.classList.add('hidden');
};

function showCookPot() {
  cookPot.classList.remove('hidden');
};

function showFood() {
  foodtxt.classList.remove('hidden');
  maketxt.classList.remove('hidden');
};

function hideFood() {
  foodtxt.classList.add('hidden');
  maketxt.classList.add('hidden');
};

function addRecipe() {
  alert('Sorry, this feature is under construction!')
};
