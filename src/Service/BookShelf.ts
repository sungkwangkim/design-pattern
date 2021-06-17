import { Aggregate } from './Aggregate';
import { Iterator } from './Iterator';
import { Book } from './Book';
import { BookShelfIterator } from './BookShelfIterator';

export class BookShelf implements Aggregate {
    #books: Array<Book>;
    #last: number;

    constructor(maxSize: number) {
        this.#books = new Array<Book>(maxSize);
        this.#last = 0;
    }

    public getBookAt(index: number): Book {
        return this.#books[index];
    }

    public appendBook(book: Book): void {
        this.#books[this.#last] = book;
        this.#last++;
    }

    public getLength(): number {
        return this.#last;
    }

    public iterator(): Iterator {
        return new BookShelfIterator(this);
    }
}
