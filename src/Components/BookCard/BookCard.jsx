const BookCard = ({ book }) => {
    const { image } = book;
    return (
        <div className="bg-gray-100 rounded-xl p-4">
            <img src={image} alt="" />
            <button className= "btn btn-success text-white mt-1">book details</button>
        </div>
    );
};

export default BookCard;