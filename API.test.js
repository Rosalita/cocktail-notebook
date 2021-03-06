import * as api from "./API"; // this imports everything from the API.js file

describe("raw data from thecocktaildb.com is transformed to sensible objects", () => {
  it("can transform a raw random drink response", () => {
    const rawRandomDrinkResponse = {
      drinks: [
        {
          dateModified: "2015-09-03 03:54:23",
          idDrink: "15789",
          strAlcoholic: "Alcoholic",
          strCategory: "Beer",
          strCreativeCommonsConfirmed: "No",
          strDrink: "Snakebite and Black",
          strDrinkAlternate: null,
          strDrinkDE: null,
          strDrinkES: null,
          strDrinkFR: null,
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/rssvwv1441248863.jpg",
          "strDrinkZH-HANS": null,
          "strDrinkZH-HANT": null,
          strGlass: "Pint glass",
          strIBA: null,
          strIngredient1: "Lager",
          strIngredient10: null,
          strIngredient11: null,
          strIngredient12: null,
          strIngredient13: null,
          strIngredient14: null,
          strIngredient15: null,
          strIngredient2: "Cider",
          strIngredient3: "Blackcurrant squash",
          strIngredient4: null,
          strIngredient5: null,
          strIngredient6: null,
          strIngredient7: null,
          strIngredient8: null,
          strIngredient9: null,
          strInstructions:
            "Put blackcurrant squash in first up to about 1cm in glass. Then add the larger and cider one after another.",
          strInstructionsDE:
            "Zuerst den schwarzen Johannisbeer-Kürbis bis zu ca. 1 cm in ein Glas geben. Dann das Lagerbier und den Apfelwein nacheinander hinzufügen.",
          strInstructionsES: null,
          strInstructionsFR: null,
          "strInstructionsZH-HANS": null,
          "strInstructionsZH-HANT": null,
          strMeasure1: "1/2 pint ",
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strMeasure2: "1/2 pint ",
          strMeasure3: "A little bit of ",
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strTags: null,
          strVideo: null
        }
      ]
    };

    const transformedRandomDrink = {
      name: "Snakebite and Black",
      glass: "Pint glass",
      image:
        "https://www.thecocktaildb.com/images/media/drink/rssvwv1441248863.jpg",
      ingredients: {
        "Blackcurrant squash": "A little bit of ",
        Cider: "1/2 pint ",
        Lager: "1/2 pint "
      },
      instructions:
        "Put blackcurrant squash in first up to about 1cm in glass. Then add the larger and cider one after another."
    };

    const result = api.transformRandomDrink(rawRandomDrinkResponse);
    expect(result).toEqual(transformedRandomDrink);
  });
  it("can transform a raw search drink response", () => {
    const rawSearchDrinkResponse = {
      drinks: [
        {
          idDrink: "14752",
          strDrink: "Kiwi Lemon",
          strDrinkAlternate: null,
          strDrinkES: null,
          strDrinkDE: null,
          strDrinkFR: null,
          "strDrinkZH-HANS": null,
          "strDrinkZH-HANT": null,
          strTags: null,
          strVideo: null,
          strCategory: "Ordinary Drink",
          strIBA: null,
          strAlcoholic: "Alcoholic",
          strGlass: "Highball glass",
          strInstructions:
            "Mix in highball glass. Stirr. Garnish with slice of kiwi.",
          strInstructionsES: null,
          strInstructionsDE:
            "Im Highball-Glas untermischen. R\u00fchren. Mit einer Scheibe Kiwi garnieren.",
          strInstructionsFR: null,
          "strInstructionsZH-HANS": null,
          "strInstructionsZH-HANT": null,
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/tpupvr1478251697.jpg",
          strIngredient1: "Kiwi liqueur",
          strIngredient2: "Bitter lemon",
          strIngredient3: "Ice",
          strIngredient4: null,
          strIngredient5: null,
          strIngredient6: null,
          strIngredient7: null,
          strIngredient8: null,
          strIngredient9: null,
          strIngredient10: null,
          strIngredient11: null,
          strIngredient12: null,
          strIngredient13: null,
          strIngredient14: null,
          strIngredient15: null,
          strMeasure1: "1 part ",
          strMeasure2: "2 parts ",
          strMeasure3: " cubes\n",
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strCreativeCommonsConfirmed: "No",
          dateModified: "2016-11-04 09:28:17"
        },
        {
          idDrink: "12714",
          strDrink: "Kiwi Papaya Smoothie",
          strDrinkAlternate: null,
          strDrinkES: null,
          strDrinkDE: null,
          strDrinkFR: null,
          "strDrinkZH-HANS": null,
          "strDrinkZH-HANT": null,
          strTags: null,
          strVideo: null,
          strCategory: "Other/Unknown",
          strIBA: null,
          strAlcoholic: "Non alcoholic",
          strGlass: "Highball Glass",
          strInstructions: "Throw everything into a blender and liquify.",
          strInstructionsES: null,
          strInstructionsDE: "Alles in einen Mixer geben und aufschlagen.",
          strInstructionsFR: null,
          "strInstructionsZH-HANS": null,
          "strInstructionsZH-HANT": null,
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg",
          strIngredient1: "Kiwi",
          strIngredient2: "Papaya",
          strIngredient3: null,
          strIngredient4: null,
          strIngredient5: null,
          strIngredient6: null,
          strIngredient7: null,
          strIngredient8: null,
          strIngredient9: null,
          strIngredient10: null,
          strIngredient11: null,
          strIngredient12: null,
          strIngredient13: null,
          strIngredient14: null,
          strIngredient15: null,
          strMeasure1: "3 ",
          strMeasure2: "1/2 ",
          strMeasure3: null,
          strMeasure4: null,
          strMeasure5: null,
          strMeasure6: null,
          strMeasure7: null,
          strMeasure8: null,
          strMeasure9: null,
          strMeasure10: null,
          strMeasure11: null,
          strMeasure12: null,
          strMeasure13: null,
          strMeasure14: null,
          strMeasure15: null,
          strCreativeCommonsConfirmed: "No",
          dateModified: "2017-02-20 15:12:51"
        }
      ]
    };

    const transformedSearchDrink = [
      {
        name: "Kiwi Lemon",
        glass: "Highball glass",
        image:
          "https://www.thecocktaildb.com/images/media/drink/tpupvr1478251697.jpg",
        ingredients: {
          "Kiwi liqueur": "1 part ",
          "Bitter lemon": "2 parts ",
          Ice: " cubes\n"
        },
        instructions:
          "Mix in highball glass. Stirr. Garnish with slice of kiwi."
      },
      {
        name: "Kiwi Papaya Smoothie",
        glass: "Highball Glass",
        image:
          "https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg",
        ingredients: {
          Kiwi: "3 ",
          Papaya: "1/2 ",
        },
        instructions:
          "Throw everything into a blender and liquify."
      }
    ];

    const result = api.transformSearchDrink(rawSearchDrinkResponse);
    expect(result).toEqual(transformedSearchDrink);
  });
});
