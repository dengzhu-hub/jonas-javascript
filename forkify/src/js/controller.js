import * as model from './model';
import { CLOSE_TIMEOUT } from './config';
import RecipeView from './views/RecipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';
import bookmarkView from './views/bookmarkView';
import paginationView from './views/paginationView';
import addRecipeView from './views/addRecipeView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
console.log("it's a sad story ");
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    // load  renderSpinner
    RecipeView.renderSpinner();
    //update results view to mark selected search result
    resultView.update(model.getSearchResultPerPage());
    // update bookmark view
    bookmarkView.update(model.state.bookMarks);
    //load recipe
    await model.loadRecipe(id);
    // console.log(model.state.recipe);
    //render recipe
    RecipeView.render(model.state.recipe);
  } catch (e) {
    RecipeView.renderError();
    console.error(e);
  }
};
const controlSearchResult = async function () {
  try {
    //render spinner
    resultView.renderSpinner();
    //get search query
    const query = searchView.getQuery();
    console.log(query);

    if (!query) return;
    //load searchResult
    await model.loadSearchResult(query);
    console.log(model.state.search.results);

    // resultView.render(model.state.search.results);
    // console.log(model.getSearchResultPerPage());
    //render results
    resultView.render(model.getSearchResultPerPage());
    console.log(model.getSearchResultPerPage());

    //rendder  initial pagination
    paginationView.render(model.state.search);

    // console.log(query);
  } catch (err) {}
};

const controlPagination = function (gotoPage) {
  //render new result
  resultView.render(model.getSearchResultPerPage(gotoPage));
  //rendder  new pagination
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //update the recipe serving (in state)
  model.updateServings(newServings);
  //updata the recipe view
  // RecipeView.render(model.state.recipe);
  RecipeView.update(model.state.recipe);
};
const controlAddBookMark = function () {
  //add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.removeBookMark(model.state.recipe.id);
  console.log(model.state.recipe);
  //update bookmark
  RecipeView.update(model.state.recipe);

  //  render bookmark
  bookmarkView.render(model.state.bookMarks);
};
const controlBookmarks = function () {
  bookmarkView.render(model.state.bookMarks);
};
const controlUploadRecipe = async function (recipe) {
  try {
    //render addRecipe
    addRecipeView.renderSpinner();
    //upload the recipe
    await model.addRecipe(recipe);
    //render recipe
    RecipeView.render(model.state.recipe);
    // show success message
    addRecipeView.renderSuccessMessage();
    //RENDER BOOKMARKVIEW
    bookmarkView.render(model.state.bookMarks);
    //change id url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //close the window
    setTimeout(() => {
      addRecipeView._toogleWindow();
    }, CLOSE_TIMEOUT * 1000);
    console.log(model.state.recipe);
  } catch (err) {
    console.error('😎', err);
    addRecipeView.renderError(err);
  }
};
const init = () => {
  bookmarkView.addHandlerRender(controlBookmarks);
  RecipeView.addHandlerRender(controlRecipe);
  RecipeView.addHanlderUpdateServing(controlServings);
  RecipeView.addHandlerAddBookMark(controlAddBookMark);
  searchView.addHandlerSearchResult(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlUploadRecipe);
};
init();
