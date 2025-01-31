
import ListBooksCard from "../ListBooksCard/ListBooksCard";
import WishlistBooksCard from "../Wishlist/Wishlist";

const ListedBooksPage = () => {
    return (
        <div className="p-6">
            <h3 className="text-4xl text-center font-bold">Books</h3>
            <div className="navbar-center lg:flex">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 lg:w-3/4">
                        <WishlistBooksCard></WishlistBooksCard>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 lg:w-3/4">
                        <ListBooksCard></ListBooksCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;