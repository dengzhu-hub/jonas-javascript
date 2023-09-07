import View from './view';
class AddRecipeView extends View {
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _parentElement = document.querySelector('.upload');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _successMessage = 'upLoad Recipe Successed';

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }
  _toogleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', e => {
      console.log(e.target);
      this._toogleWindow();
    });
  }
  _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', e => {
      console.log(e.currentTarget, e.target);

      this._toogleWindow();
    });
    this._overlay.addEventListener('click', e => {
      console.log(e.currentTarget, e.target);

      this._toogleWindow();
    });
  }
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }
}
export default new AddRecipeView();
