import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { id, image } = book;
    return (
        <Link to={`./book/${id}`}>
            <div className="bg-gray-100 rounded-xl p-4">
            <img src={image} alt="" />
            </div>
        </Link>
    );
};



export default BookCard;