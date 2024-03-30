const getStoredBooks = () =>{
    const storedBook = localStorage.getItem('read-books');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
} 


const readBooks = id =>{
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedBooks))
    }
}

export {getStoredBooks, readBooks}