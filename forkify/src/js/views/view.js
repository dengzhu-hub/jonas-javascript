// import { icons } from 'url:../../img/icons.svg';
import icons from 'url:../../img/icons.svg';
console.log(icons);

class View {
  _data;
  /**
   * Render the recived data to the DOM
   * @param {Object | Object[]} data  the data te be rendered (e.g. recipe)
   * @param {boolean} [render=true] if render is false, 就直接创建markup字符串，而不是去渲染DOM
   * @returns {undefined | string} 如果render 设为false，就会返回markup字符串
   * @this {Object} View object
   * @author jackdeng
   * @todo Implement this function
   */

  render(data, render = true) {
    // console.log('hihi');

    // console.log(this._data);
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;

    const markup = this._generateMarkup();
    if (!render) return markup;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
/**
 * 
 * @param {*} data 
 * @returns 
 */
  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const newMarkup = this._generateMarkup();
    const dom = document.createRange().createContextualFragment(newMarkup);
    // console.log(dom);

    const newElement = Array.from(dom.querySelectorAll('*'));
    // console.log(newElement);
    const curElement = Array.from(this._parentElement.querySelectorAll('*'));
    // console.log(curElement);
    newElement.forEach((newEl, i) => {
      const curEl = curElement[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // update change text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        console.log('🤢', newEl.firstChild?.nodeValue.trim());

        curEl.textContent = newEl.textContent;
      }
      // update change attributes

      if (!newEl.isEqualNode(curEl)) {
        // console.log(newEl.attributes);
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
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
  renderSuccessMessage(message = this._successMessage) {
    const markup = `
    <div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${this._successMessage}</p> 
    `;
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default View;
