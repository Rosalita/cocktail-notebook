import reducer from "./reducer";
import { saveDrink, deleteDrink } from "./actions";

describe("reducers transform state correctly", () => {
  it("returns the previous state if the action type is unrecognised", () => {
    const prevState = { drinks: {} };

    const action = {
      type: "unknown",
      payload: { foo: "bar" }
    };

    const expectedState = {
      drinks: {}
    };
    const result = reducer(prevState, action);
    expect(result).toEqual(expectedState);
  });

  it("can SAVE_DRINK when the state contains no drinks", () => {
    const prevState = {};
    const action = saveDrink({
      name: "Arizona Antifreeze",
      glass: "Shot glass",
      image:
        "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
      ingredients: {
        "Midori melon liqueur": "1/3 oz ",
        "Sweet and sour": "1/3 oz ",
        Vodka: "1/3 oz "
      },
      instructions: "Pour all ingredients into shot glass and slam !!!!"
    });

    const expectedState = {
      drinks: {
        "Arizona Antifreeze": {
          name: "Arizona Antifreeze",
          glass: "Shot glass",
          image:
            "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
          ingredients: {
            "Midori melon liqueur": "1/3 oz ",
            "Sweet and sour": "1/3 oz ",
            Vodka: "1/3 oz "
          },
          instructions: "Pour all ingredients into shot glass and slam !!!!"
        }
      }
    };
    const result = reducer(prevState, action);
    expect(result).toEqual(expectedState);
  });

  it("can SAVE_DRINK when the state already contains a drink", () => {
    const prevState = {
      drinks: {
        "Arizona Antifreeze": {
          name: "Arizona Antifreeze",
          glass: "Shot glass",
          image:
            "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
          ingredients: {
            "Midori melon liqueur": "1/3 oz ",
            "Sweet and sour": "1/3 oz ",
            Vodka: "1/3 oz "
          },
          instructions: "Pour all ingredients into shot glass and slam !!!!"
        }
      }
    };

    const action = saveDrink({
      name: "Tequila Fizz",
      glass: "Collins glass",
      image:
        "https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg",
      ingredients: {
        "Egg white": "1 ",
        "Ginger ale": null,
        Grenadine: "3/4 oz ",
        "Lemon juice": "1 tblsp ",
        Tequila: "2 oz "
      },
      instructions:
        "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve."
    });

    const expectedState = {
      drinks: {
        "Arizona Antifreeze": {
          name: "Arizona Antifreeze",
          glass: "Shot glass",
          image:
            "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
          ingredients: {
            "Midori melon liqueur": "1/3 oz ",
            "Sweet and sour": "1/3 oz ",
            Vodka: "1/3 oz "
          },
          instructions: "Pour all ingredients into shot glass and slam !!!!"
        },
        "Tequila Fizz": {
          name: "Tequila Fizz",
          glass: "Collins glass",
          image:
            "https://www.thecocktaildb.com/images/media/drink/2bcase1504889637.jpg",
          ingredients: {
            "Egg white": "1 ",
            "Ginger ale": null,
            Grenadine: "3/4 oz ",
            "Lemon juice": "1 tblsp ",
            Tequila: "2 oz "
          },
          instructions:
            "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve."
        }
      }
    };

    const result = reducer(prevState, action);
    expect(result).toEqual(expectedState);
  });
  it("can DELETE_DRINK when the state contains a drink", () => {
    const prevState = {
      drinks: {
        "Arizona Antifreeze": {
          name: "Arizona Antifreeze",
          glass: "Shot glass",
          image:
            "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
          ingredients: {
            "Midori melon liqueur": "1/3 oz ",
            "Sweet and sour": "1/3 oz ",
            Vodka: "1/3 oz "
          },
          instructions: "Pour all ingredients into shot glass and slam !!!!"
        }
      }
    };

    const action = deleteDrink("Arizona Antifreeze");

    const expectedState = {
      drinks: {}
    };

    const result = reducer(prevState, action);
    expect(result).toEqual(expectedState);
  });
});
