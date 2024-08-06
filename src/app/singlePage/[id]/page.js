import Link from "next/link";

const getData = async (id) => {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();

  return { data };
};

async function singlePage({ params }) {
  const { data } = await getData(params.id);
  return (
    <div className=" pt-24 lg:pt-44">
      <div className="card card-side container px-20 mx-auto lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={data.thumbnail} alt="Album" />
        </figure>
        <div className="w-full text-center flex flex-col justify-center items-center">
          <h2 className="mb-10">{data.title}</h2>
          <p className="mb-10">{data.description}.</p>
          <div className="flex w-full justify-end px-10">
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
