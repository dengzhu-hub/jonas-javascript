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
