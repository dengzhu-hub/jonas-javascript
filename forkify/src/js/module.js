import { getJson } from './helper';
import { API_URL } from './config';
const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};
const loadRecipe = async id => {
  try {
    const data = await getJson(`${API_URL}${id}`);
    console.log(data);
    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    return data;
  } catch (err) {
    throw err;
  }
};

const loadSearchResult = async query => {
  state.search.query = query;
  const search = await getJson(`${API_URL}?search=pizza`);
  console.log(search);
  state.search.results = search.data.recipes.map(rec => {
    return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
    };
  });

  try {
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export { state, loadRecipe, loadSearchResult };
