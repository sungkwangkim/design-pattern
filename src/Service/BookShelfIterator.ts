import { Iterator } from './Iterator';
import { BookShelf } from './BookShelf';
import { Book } from './Book';

export class BookShelfIterator implements Iterator {
  #bookShelf: BookShelf;
  #index: number;

  constructor(bookShelf: BookShelf) {
    this.#bookShelf = bookShelf;
    this.#index = 0;
  }

  public hasNext(): boolean {
    if (this.#index < this.#bookShelf.getLength()) {
      return true;
    }

    return false;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public next(): object {
    const book: Book = this.#bookShelf.getBookAt(this.#index);
    this.#index++;

    return book;
  }
  

}