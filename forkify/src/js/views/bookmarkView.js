import previewView from './previewView';
import View from './view';
class BookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'no bookmark selected, please select and bookmark it';
  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }

  addHandlerRender = handler => {
    window.addEventListener('load', handler);
  };
}

export default new BookMarkView();
