import * as module from './module';
import RecipeView from './views/RecipeView';
import searchView from './views/searchView';

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
    await module.loadRecipe(id);
    console.log(module.state.recipe);
    RecipeView.render(module.state.recipe);
  } catch (e) {
    RecipeView.renderError()
    console.log(e);
  }
};
const controlSearchResult = async function () {
  try {
    const query = searchView.getQuery();
    console.log(query);
    
    if (!query) return;
    await module.loadSearchResult(query);
    console.log(module.state.search.results);

    console.log(query);
  } catch (err) {
    searchView;
  }
};

const init = () => {
  RecipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearchResult(controlSearchResult);
};
init();
