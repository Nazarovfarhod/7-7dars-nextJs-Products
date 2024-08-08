"use client";
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const author = formData.get("author");
    const photoURL = formData.get("photoURL");
    const url =
      "https://online-json-server-api.up.railway.app/project/66b4546700b1a8ec3af1d68d/books";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, author, photoURL }),
    }).then(() => {
      alert("Success!");
      window.location.reload();
      e.target.reset();
    });
  };

  return (
    <div className="w-full py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="title">
            Title :{" "}
          </label>
          <input
            required
            name="title"
            className="py-2 mb-3 px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="text"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="author">
            Author :{" "}
          </label>
          <input
            required
            name="author"
            className="py-2 mb-3 px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="text"
            id="author"
          />
        </div>
        <div className="flex flex-col gap-2 w-full text-center">
          <label className="px-5 text-lg font-semibold" htmlFor="URL">
            Book's Photo URL :{" "}
          </label>
          <input
            required
            name="photoURL"
            className="py-2 mb-3 px-3 mx-auto focus:border-none rounded-[25px] w-full max-w-[350px]"
            type="url"
            id="URL"
          />
        </div>
        <div>
          <button className="mb-7 py-2 px-10 rounded-3xl text-white font-semibold  bg-primary">
            Creat a New Book
          </button>
        </div>
      </form>
      <hr className="border border-black mb-2" />
      <h1 className="w-full text-center text-4xl font-bold ">Books</h1>
    </div>
  );
}

export default Form;
