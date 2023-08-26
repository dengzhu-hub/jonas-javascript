import { getJson } from './helper';
import { API_URL, CURRENT_PAGE } from './config';
const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    currentPage: CURRENT_PAGE,
    page: 1,
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
    console.log(state.recipe);

    return data;
  } catch (err) {
    throw err;
  }
};

const loadSearchResult = async query => {
  state.search.query = query;
  const search = await getJson(`${API_URL}?search=${query}`);
  // console.log(search);
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

const getSearchResultPerPage = (page = state.search.page) => {
  state.search.page = page;
  const startIndex = (page - 1) * state.search.currentPage;
  const endIndex = startIndex + state.search.currentPage;
  return state.search.results.slice(startIndex, endIndex);
};
const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newqy = oldQ * newSer / oldSer

    state.recipe.servings = newServings;
  });
};

export {
  state,
  loadRecipe,
  loadSearchResult,
  getSearchResultPerPage,
  updateServings,
};
