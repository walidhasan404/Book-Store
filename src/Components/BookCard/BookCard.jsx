import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { id, image } = book;
    return (
        <div className="bg-gray-100 rounded-xl p-4">
            <img src={image} alt="" />
            <Link to={`./book/${id}`}><button className= "btn btn-success text-white mt-1">book details</button></Link>
        </div>
    );
};

export default BookCard;