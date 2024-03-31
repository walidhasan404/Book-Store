import React, { useEffect, useState } from "react"; 
import { Link, useLoaderData } from "react-router-dom"; 
import { getStoredBooks, removeReadBook } from "../../Utility/LocalStorage";

const WishlistBooksCard = () => { 
    const books = useLoaderData();

    const [wishlistBooks, setWishlistBooks] = useState([]); 

    useEffect(() => {
        const storedBookIds = getStoredBooks();
        if (books.length > 0) {
            const wishlistBooks = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    wishlistBooks.push(book);
                }
            }
            setWishlistBooks(wishlistBooks);
        }
    }, [books]);

    const handleRemoveBook = (id) => {
        const updatedWishlistBooks = wishlistBooks.filter(book => book.id !== id);
        setWishlistBooks(updatedWishlistBooks);
        removeReadBook(id); // Update local storage
    };

    return (
        <div className="p-2">
            <h3 className="text-4xl text-center font-bold">Read Books</h3> 
            {wishlistBooks.map((book) => (
                <div key={book.id} className="card card-side bg-base-100 flex flex-col lg:flex-row shadow-xl p-6">
                    <figure className="bg-gray-100 p-2 lg:p-8 my-auto "><img src={book.img} alt="Book" /></figure>
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

export default WishlistBooksCard;
