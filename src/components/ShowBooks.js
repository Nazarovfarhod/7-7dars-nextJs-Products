"use client";
import { MdDeleteForever } from "react-icons/md";

const handleDelete = (id) => {
  const url = `https://online-json-server-api.up.railway.app/project/66b4546700b1a8ec3af1d68d/books/${id}`;

  fetch(url, {
    method: "DELETE",
  })
    .then(() => {
      alert("Book deleted successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

function ShowBooks({ books }) {
  return (
    <div className="w-full flex flex-wrap container mx-auto justify-center gap-4 pb-10">
      {books.data.map((book) => {
        return (
          <div key={book.id} className="p-2">
            <div className="card h-96 w-72 bg-base-100 shadow-xl">
              <div className="flex justify-end p-2">
                {" "}
                <button
                  onClick={() => handleDelete(book.id)}
                  type="button"
                >
                  <MdDeleteForever className="w-5 h-5 hover:text-red-500 hover:scale-110 hover:-rotate-6" />
                </button>
              </div>
              <div className="card-body p-2 text-center">
                <h2 className="">
                  <span className="font-bold"> Name of Book:</span>{" "}
                  <span className="capitalize"> {book.title}</span>
                </h2>
                <p>
                  <span className="font-bold"> Author:</span>{" "}
                  <span>{book.author}</span>
                </p>
              </div>

              <figure>
                <img src={book.photoURL} alt="Shoes" />
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowBooks;
