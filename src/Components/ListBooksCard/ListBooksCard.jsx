import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/LocalStorage";

const ListBooksCard = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [sortBy, setSortBy] = useState(null);

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (books.length > 0) {
            const booksRead = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    booksRead.push(book);
                }
            }
            setReadBooks(booksRead);
        }
    }, [books]);

    const handleRemoveBook = (id) => {
        const updatedReadBooks = readBooks.filter(book => book.id !== id);
        setReadBooks(updatedReadBooks);
    };

    const handleSortBy = (criteria) => {
        setSortBy(criteria);
    };

    let sortedBooks = [...readBooks];
    if (sortBy === "rating") {
        sortedBooks = sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "numOfPages") {
        sortedBooks = sortedBooks.sort((a, b) => b.numOfPages - a.numOfPages);
    } else if (sortBy === "publish_date") {
        sortedBooks = sortedBooks.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date));
    }

    return (
        <div className="p-2">
            <h3 className="text-4xl text-center font-bold">Wishlist Books</h3>
            <div className="dropdown my-6 flex justify-center">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-600 hover:bg-green-700 text-white">Sort By</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-green-300 hover:bg-yellow rounded-box w-52">
                    <li className="hover:bg-white" onClick={() => handleSortBy("rating")}>Rating</li>
                    <li className="hover:bg-white" onClick={() => handleSortBy("numOfPages")}>Number of Pages</li>
                    <li className="hover:bg-white" onClick={() => handleSortBy("publish_date")}>Publish Date</li>
                </ul>
            </div>
            {sortedBooks.map((book) => (
                <div key={book.id} className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row p-4">
                    <figure className="bg-gray-100 p-2 lg:p-8 my-auto"><img src={book.img} alt="Book" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{book.title}</h2>
                        <p className="">By: {book.author}</p>
                        <p className="text-base font-medium">{book.genre}</p>
                        <p><span className="text-lg font-semibold">Review:</span> {book.review}</p>
                        <p><span className="text-lg font-medium">Number of pages:</span> {book.numOfPages}</p>
                        <div className="flex">
                            <p><span className="text-lg font-medium">Publisher:</span> {book.publisher}</p>
                            <p><span className="text-lg font-medium">Publish Date:</span> {book.publish_date}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <button className="btn btn-outline btn-primary">Category: Classic</button>
                            <button className="btn btn-outline btn-warning"><p className="text-lg font-medium">Rating: <span className="font-normal">{book.rating}</span></p></button>
                            <Link key={book.id} to={`/book/${book.id}`}>
                                <button className="btn btn-success text-white">Book Details</button>
                            </Link>
                            <button className="btn btn-primary" onClick={() => handleRemoveBook(book.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListBooksCard;
