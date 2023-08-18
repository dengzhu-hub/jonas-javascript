import View from './view';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'could not show results,please try again';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(this._generatePreview).join('');
  }

  _generatePreview(res) {
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="#${res.id}">
      <figure class="preview__fig">
        <img src="${res.image}" alt="${res.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${res.title}</h4>
        <p class="preview__publisher">${res.publisher}</p>
      </div>
    </a>
  </li>
    `;
  }
}

export default new ResultView();
