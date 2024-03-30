import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import { readBooks } from "../../Utility/LocalStorage";
const BookDetails = () => {

    const handleRead = () =>{
        readBooks(idInt);
        toast('added to read successfully')
    }
    const handleWishlist = () =>{
        toast('added to wishlist')
    }

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id == idInt);
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
                        <button onClick={handleRead} className="btn btn-success text-white">Read</button>
                        <button onClick={handleWishlist} className="btn btn-primary text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;