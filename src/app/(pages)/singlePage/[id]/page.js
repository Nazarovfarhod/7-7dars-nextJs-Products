import Link from "next/link";
//react icons
import { FaStar } from "react-icons/fa";

const getData = async (id) => {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();

  return { data };
};

async function singlePage({ params }) {
  const { data } = await getData(params.id);
  return (
    <div className="min-h-screen pt-24 lg:pt-44">
      <div className="card card-side container py-14 px-20 mx-auto lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={data.thumbnail} alt="Album" />
        </figure>
        <div className="w-full text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">{data.title}</h2>
          <p className="mb-10 italic font-semibold">
            (
            {data.brand
              ? data.brand
              : "This product does not have a brand name."}
            )
          </p>
          <p className="mb-10">{data.description}.</p>
          <div className="flex justify-evenly items-center w-full mb-8">
            <span className="opacity-50 line-through text-lg">
              Old Price: ${data.price}{" "}
            </span>
            <span className="px-7 py-2 text-white rounded-full bg-red-400">
              - {data.discountPercentage}%
            </span>
            <span className="text-lg">
              Sale Price: $
              {(
                data.price -
                (data.price * data.discountPercentage) / 100
              ).toFixed(2)}{" "}
            </span>
          </div>
          <div className="flex w-full justify-between items-center px-10">
            <p className="text-lg font-bold flex items-center gap-1">
              Rating: <FaStar className="text-yellow-300 w-6 h-6" />{" "}
              {data.rating}
            </p>
            <p className="italic font-semibold">
              We have {data.stock} of from this product.
            </p>
            <Link href="/" className="btn btn-primary px-20">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default singlePage;
