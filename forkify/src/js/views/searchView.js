class SearchView {
  _parentElement = document.querySelector('.search');
  _errorMessage = 'could not search any recipe, please try again';
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    // console.log(query);
    
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentElement.reset();
  }
  addHandlerSearchResult(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
