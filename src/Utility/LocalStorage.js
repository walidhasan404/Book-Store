const getStoredBooks = () => {
    const storedBook = localStorage.getItem('read-books');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const addReadBook = (id) => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedBooks));
    }
}

const removeReadBook = (id) => {
    const storedBooks = getStoredBooks();
    const updatedBooks = storedBooks.filter(bookId => bookId !== id);
    localStorage.setItem('read-books', JSON.stringify(updatedBooks));
}


const addWishlistBook = (id) => {
    const storedBooks = getStoredBooks();
    storedBooks.push(id);
    localStorage.setItem('wishlist-books', JSON.stringify(storedBooks));
};


export { getStoredBooks, addReadBook, removeReadBook, addWishlistBook };
