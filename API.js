const URLPrefix = "https://www.thecocktaildb.com/api/json/v1/1/";

export const getRandomDrink = async () => {
  const URL = `${URLPrefix}random.php`;
  const response = await fetch(URL);
  const rawJSON = await response.json();
  const randomDrink = transformRandomDrink(rawJSON);
  return randomDrink;
};

export const transformRandomDrink = rawJSON => {
  const data = rawJSON["drinks"][0];

  const ingredients = {};
  if (data["strIngredient1"] != null) {
    ingredients[data["strIngredient1"]] = data["strMeasure1"];
  }
  if (data["strIngredient2"] != null) {
    ingredients[data["strIngredient2"]] = data["strMeasure2"];
  }
  if (data["strIngredient3"] != null) {
    ingredients[data["strIngredient3"]] = data["strMeasure3"];
  }
  if (data["strIngredient4"] != null) {
    ingredients[data["strIngredient4"]] = data["strMeasure4"];
  }
  if (data["strIngredient5"] != null) {
    ingredients[data["strIngredient5"]] = data["strMeasure5"];
  }
  if (data["strIngredient6"] != null) {
    ingredients[data["strIngredient6"]] = data["strMeasure6"];
  }
  if (data["strIngredient7"] != null) {
    ingredients[data["strIngredient7"]] = data["strMeasure7"];
  }
  if (data["strIngredient8"] != null) {
    ingredients[data["strIngredient8"]] = data["strMeasure8"];
  }
  if (data["strIngredient9"] != null) {
    ingredients[data["strIngredient9"]] = data["strMeasure9"];
  }
  if (data["strIngredient10"] != null) {
    ingredients[data["strIngredient10"]] = data["strMeasure10"];
  }
  if (data["strIngredient11"] != null) {
    ingredients[data["strIngredient11"]] = data["strMeasure11"];
  }
  if (data["strIngredient12"] != null) {
    ingredients[data["strIngredient12"]] = data["strMeasure12"];
  }
  if (data["strIngredient13"] != null) {
    ingredients[data["strIngredient13"]] = data["strMeasure13"];
  }
  if (data["strIngredient14"] != null) {
    ingredients[data["strIngredient14"]] = data["strMeasure14"];
  }
  if (data["strIngredient15"] != null) {
    ingredients[data["strIngredient15"]] = data["strMeasure15"];
  }

  const drink = {
    name: data["strDrink"],
    instructions: data["strInstructions"],
    glass: data["strGlass"],
    image: data["strDrinkThumb"],
    ingredients: ingredients
  };
  return drink;
};
