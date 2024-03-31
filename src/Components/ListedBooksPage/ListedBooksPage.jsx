import { NavLink } from "react-router-dom";

const ListedBooksPage = () => {
    return (
        <div className="p-6">
            <h3 className="text-4xl text-center font-bold">Books</h3>
            <div className="navbar-center lg:flex">
                <ul className="px-1 flex gap-4 mt-6">
                    <li className="text-center font-medium bg-gray-200 p-3 rounded-xl hover:bg-gray-400 text-base"><NavLink to="/read">Read</NavLink></li>
                    <li className="text-center font-medium bg-gray-200 p-3 rounded-xl hover:bg-gray-400 text-base"><NavLink to="/wishlist">Wishlist</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default ListedBooksPage;