import Form from "@/components/Form";
import ShowBooks from "@/components/ShowBooks";

 
const getData = async () => {
  const req = await fetch(
    "https://online-json-server-api.up.railway.app/project/66b4546700b1a8ec3af1d68d/books",
    {
      next: {
        revalidate: 0,
      },
    }
  );
  const data = await req.json();

  return data;
};

async function about() {
  const books = await getData();
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto w-full">
        <Form />
        <ShowBooks books={books} />
      </div>
    </div>
  );
}

export default about;
