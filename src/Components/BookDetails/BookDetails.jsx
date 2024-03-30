import { useLoaderData, useParams } from "react-router-dom";
import React from "react";
const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.id == id)
    return (
        <div className="p-8">
            <h2 className="text-3xl text-center mb-4 font-bold">Book Details: { }</h2>
            <div className="card card-side bg-base-100 shadow-xl p-6">
                <figure className="bg-gray-100 p-2 lg:p-8 my-auto"><img src={book.img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{book.title}</h2>
                    <p className="">By: {book.author}</p>
                    <p className="text-base font-medium">{book.genre}</p>
                    <p><span className="text-lg font-semibold">Review:</span> {book.review}</p>
                    <p><span className="text-lg font-medium">Number of pages:</span> {book.numOfPages}</p>
                    <p className="text-lg font-medium">rating: <span className="font-normal">{book.rating}</span></p>
                    <div className="flex gap-4">
                        <button className="btn btn-success text-white">Read</button>
                        <button className="btn btn-primary text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;