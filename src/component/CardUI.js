export default function CardUI({ data }) {
  return (
    <div className=" mx-auto max-w-7xl px-2 sm:px-6 py-4 lg:px-8 shadow-md my-10 flex">
      <div className="h-[16rem] w-1/3 bg-cover bg-center rounded-md me-4 overflow-hidden">
        <img className="h-full w-full" src={data.urlToImage}></img>
      </div>
      <div className="w-2/3">
        <h3 className="text-2xl font-semibold">{data.title}</h3>
        <h3 className="text-sm">
          <span className="font-bold">short by</span> {data.author} /{" "}
          {data.publishedAt}
        </h3>
        <p className="text-gray-600">{data.description}</p>

        <h6 className="text-[12px]">
          read more at{" "}
          <a href={data.url} target="_blank">
            {data.source.name}
          </a>
        </h6>
      </div>
    </div>
  );
}
