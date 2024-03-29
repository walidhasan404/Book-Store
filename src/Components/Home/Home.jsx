const Home = () => {

    const
    return (
        <div className="p-8">
            <div className="flex p-4 justify-evenly bg-gray-100">
                <div className="my-auto">
                    <h2 className="text-lg lg:text-4xl font-bold mb-8">Books to freshen up your bookshelf</h2>
                    <button className="btn btn-success">View The List</button>
                </div>
                <div>
                    <img src="src/Components/Container/img.png" alt="" />
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-4xl font-bold text-center">Books</h3>
                
            </div>
        </div>
    );
};

export default Home;