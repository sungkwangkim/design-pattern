import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BookShelf} from './Service/BookShelf';
import {Book} from './Service/Book';

import {PrintBanner} from './Service/Adaptor/case1/PrintBanner';
import {Print} from './Service/Adaptor/case1/Print';

import {PrintBanner as PrintBanner2} from './Service/Adaptor/case2/PrintBanner';
import {Print as Print2} from './Service/Adaptor/case2/Print';

function App(): JSX.Element {
    const [count, setCount] = useState(0);

    const runIterator = () => {
        const bookShelf = new BookShelf(5);

        bookShelf.appendBook(new Book("책 1"))
        bookShelf.appendBook(new Book("책 2"))
        bookShelf.appendBook(new Book("책 3"))
        bookShelf.appendBook(new Book("책 4"))
        bookShelf.appendBook(new Book("책 5"))

        const iterator = bookShelf.iterator();

        while (iterator.hasNext()) {
            const book: Book = iterator.next() as Book;
            console.log(book.name)
        }
    }

    const runAdapter = () => {
        const print: Print = new PrintBanner('hello');
        console.log('case 1')
        print.printStrong()
        print.printWeak()

        const print2: Print2 = new PrintBanner2('hello');
        console.log('case 2')
        print2.printStrong()
        print2.printWeak()

    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>

                    <button type="button" onClick={runAdapter}>
                        Adapter
                    </button>

                    <button type="button" onClick={runIterator}>
                        Iterator
                    </button>

                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    {' | '}
                    <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
