import Navbar from "@/components/navbar/page";
import Link from "next/link";
import { TbHandClick } from "react-icons/tb";

const getData = async () => {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();

  return { data };
};

async function Home() {
  const { data } = await getData();

  return (
    <div className="w-full pb-6  container mx-auto">
       <header className="bg-slate-300 sticky top-0 z-30 mb-10">
          {" "}
          <Navbar />
        </header>
      <h1 className="text-4xl font-bold w-full text-center mb-10">Products</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.products.map((prod) => {
          return (
            <Link
              key={prod.id}
              className="w-full"
              href={`singlePage/${prod.id}`}
            >
              <div className="card bg-base-100 h-[300px] image-full max-w-full mb-5 shadow-xl hover:shadow-2xl transition-shadow">
                <figure>
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="object-cover w-full h-48"
                  />
                </figure>
                <div className="card-body text-center p-4">
                  <h1 className="card-title mx-auto mb-4 text-2xl font-bold">
                    {prod.title}
                  </h1>
                  <p className="italic">
                    <span className="font-bold">Brand: </span>
                    {prod.brand
                      ? prod.brand
                      : "This product does not have a brand name."}
                  </p>
                  <p className="italic underline mb-10 mt-4 flex flex-col items-center gap-2">
                    For more info click the card{" "}
                    <TbHandClick className="w-6 h-6" />
                  </p>
                  <p className="line-clamp-2">{prod.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
