import * as module from './module';
import RecipeView from './views/RecipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';
import paginationView from './views/paginationView';

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
    //load recipe
    await module.loadRecipe(id);
    console.log(module.state.recipe);
    //render recipe
    RecipeView.render(module.state.recipe);
  } catch (e) {
    RecipeView.renderError();
    console.log(e);
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
    await module.loadSearchResult(query);
    console.log(module.state.search.results);

    // resultView.render(module.state.search.results);
    // console.log(module.getSearchResultPerPage());
    //render results
    resultView.render(module.getSearchResultPerPage());
    console.log(module.getSearchResultPerPage());

    //rendder  initial pagination
    paginationView.render(module.state.search);

    // console.log(query);
  } catch (err) {}
};

const controlPagination = function (gotoPage) {
  //render new result
  resultView.render(module.getSearchResultPerPage(gotoPage));
  //rendder  new pagination
  paginationView.render(module.state.search);
};

const controlServings = function (newServings) {
  //update the recipe serving (in state)
  module.updateServings(newServings);
  //updata the recipe view
  RecipeView.render(module.state.recipe);
};
const init = () => {
  RecipeView.addHandlerRender(controlRecipe);
  RecipeView.addHanlderUpdateServing(controlServings);
  searchView.addHandlerSearchResult(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};
init();
