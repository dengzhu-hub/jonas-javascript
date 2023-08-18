import View from './view';
import icons from 'url:../../img/icons.svg';

class Pagination extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick = function (handle) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      const gotoPage = +btn.dataset.goto;
      handle(gotoPage);
    });
  };

  _generatePaginationButton(iconHref, pageNumber, direction) {
    return `
      <button data-goto = ${pageNumber} class="btn--inline pagination__btn--${direction}">
        ${
          direction === 'prev'
            ? `<svg class="search__icon">
                 <use href="${iconHref}#icon-arrow-left"></use>
               </svg>`
            : ''
        }
        <span>${pageNumber}</span>
        ${
          direction === 'next'
            ? `<svg class="search__icon">
                 <use href="${iconHref}#icon-arrow-right"></use>
               </svg>`
            : ''
        }
      </button>
    `;
  }

  _generateMarkup() {
    const numberOfPages = Math.ceil(
      this._data.results.length / this._data.currentPage
    );
    console.log(numberOfPages);

    //one page,and other pages

    if (this._data.page === 1 && numberOfPages > 1) {
      //   return `one page and other pages`;
      return this._generatePaginationButton(icons, this._data.page + 1, 'next');
    }

    //last page
    if (this._data.page === numberOfPages && numberOfPages > 1) {
      //   return `last page`;
      return this._generatePaginationButton(icons, this._data.page - 1, 'prev');
    }
    if (this._data.page < numberOfPages) {
      const prevButton = this._generatePaginationButton(
        icons,
        this._data.page - 1,
        'prev'
      );
      const nextButton = this._generatePaginationButton(
        icons,
        this._data.page + 1,
        'next'
      );
      return prevButton + nextButton;
    }

    return ''; // Handle other cases or errors if needed
  }
}
export default new Pagination();
