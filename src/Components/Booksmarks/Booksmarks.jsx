import Bookmark from "../Bookmark/Bookmark";


const Booksmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">

            <div>
                <h3 className="text-4xl">Reading Time:{readingTime}</h3>
            </div>

            <h2 className="text-2xl text-center ">BooksMarked blog:{bookmarks.length}</h2>
            
            {
                bookmarks.map(bookmark => <Bookmark  key={bookmark.id}  bookmark={bookmark}></Bookmark>)

               
            }


        </div>
    );
};

export default Booksmarks;

