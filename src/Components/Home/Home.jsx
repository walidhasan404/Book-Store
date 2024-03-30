import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Home = () => {
   const [books, setBooks] = useState([]);

   useEffect(() =>{
    fetch('Books.json')
    .then(res => res.json())
    .then(data => setBooks(data));
   }, [])

    return (
        <div className="p-8">
            <div className="flex lg:flex-row flex-col p-4 justify-evenly bg-gray-100">
                <div className="lg:my-auto text-center lg:text-start">
                    <h2 className="text-lg lg:text-4xl font-bold mb-4">Books to freshen up your bookshelf</h2>
                    <button className="btn btn-success">View The List</button>
                </div>
                <div className="mx-auto lg:mx-0 mt-3">
                    <img src="src/Components/Container/img.png" alt="" />
                </div>
            </div>
            <div className="my-8">
                <h3 className="text-4xl font-bold text-center mb-6">Books</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        books.map(book => <BookCard key={book.id} book={book}>

                        </BookCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;