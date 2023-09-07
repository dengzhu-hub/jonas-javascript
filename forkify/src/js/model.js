// import { ajaxRequest, ajaxRequest } from './helper';
import { ajaxRequest } from './helper';

import { API_URL, CURRENT_PAGE, KEY } from './config';
const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    currentPage: CURRENT_PAGE,
    page: 1,
  },
  bookMarks: [],
};
const createRecipeObject = function (data) {
  const { recipe } = data.data;

  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time, 
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};
const loadRecipe = async id => {
  try {
    const data = await ajaxRequest(`${API_URL}${id}?key=${KEY}`);
    // console.log(data);
    state.recipe = createRecipeObject(data);

    if (state.bookMarks.some(el => el.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
    // console.log(state.recipe);

    return data;
  } catch (err) {
    throw err;
  }
};

const loadSearchResult = async query => {
  state.search.query = query;
  const search = await ajaxRequest(`${API_URL}?search=${query}&key=${KEY}`);
  // console.log(search);
  state.search.results = search.data.recipes.map(rec => {
    return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
      ...(rec.key && { key: rec.key }),
    };
  });
  state.search.page = 1;

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
const persistBookMarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
};

const addBookMark = function (recipe) {
  // add bookmark
  state.bookMarks.push(recipe);
  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookMarks();
};
const removeBookMark = function (id) {
  // delete bookmark
  const index = state.bookMarks.findIndex(el => el.id === id);
  state.bookMarks.splice(index, 1);
  // Mark current recipe as  not bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false;
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookMarks = JSON.parse(storage);
};
init();

const removeBookmarks = function () {
  localStorage.clear();
};
const addRecipe = async function (newRecipe) {
  try {
    // console.log(Object.entries(newRecipe));
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        const ingArr = ing[1].split(',').map(el => el.trim());
        // console.log(ingArr);
        if (ingArr.length !== 3)
          throw new Error( 
            'Wrong ingredients formats, please use correct format format:)'
          );
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    // console.log(recipe);
    const data = await ajaxRequest(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookMark(state.recipe);
  } catch (err) {
    throw err;
  }
};
// removeBookmarks()
export {
  state,
  loadRecipe,
  loadSearchResult,
  getSearchResultPerPage,
  updateServings,
  addBookMark,
  removeBookMark,
  addRecipe,
};
