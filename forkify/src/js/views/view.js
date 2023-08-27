// import { icons } from 'url:../../img/icons.svg';
import icons from 'url:../../img/icons.svg';
console.log(icons);

class View {
  _data;

  render(data) {
    // console.log('hihi');

    // console.log(this._data);
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;

    const markup = this._generateMarkup();
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const newMarkup = this._generateMarkup();
    const dom = document.createRange().createContextualFragment(newMarkup);
    console.log(dom);

    const newElement = Array.from(dom.querySelectorAll('*'));
    console.log(newElement);
    const curElement = Array.from(this._parentElement.querySelectorAll('*'));
    console.log(curElement);
    newElement.forEach((newEl, i) => {});
  }
  renderSpinner() {
    const markup = `
   <div class="spinner">
   <svg>
     <use href="${icons}#icon-loader"></use>
   </svg>
 </div>
   `;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  clear() {
    this._parentElement.innerHTML = '';
  }
  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${this._errorMessage}</p>
          </div>
    `;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default View;
