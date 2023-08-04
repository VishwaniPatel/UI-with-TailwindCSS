import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import LikeButton from "./LikeButton";
import { postNewsData } from './../services/saveNewsDataService'
export default function CardUI({ data }) {
  const date = new Date(data.news_obj.created_at);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "long",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);



  const { news_obj } = data;

  const { image_url, title, author_name, created_at, content, source_url, source_name, ...rest } = news_obj

  const newsdata = { image_url, title, author_name, created_at, content, source_url, source_name }

  const saveNewsDataHandler = () => {
    postNewsData(newsdata);
  }
  // console.log(data);

  return (
    <div className=" mx-auto max-w-7xl px-2 sm:px-6 py-4 lg:px-8 shadow-md my-10 flex bg-white dark:bg-slate-800">
      <div className="h-[16rem] w-1/3 bg-cover bg-center rounded-md me-4 overflow-hidden">
        {/* <img className="h-full w-full" src={data.urlToImage}></img> */}
        <img className="h-full w-full" src={data.news_obj.image_url}></img>
      </div>
      <div className="w-2/3">
        {/* <h3 className="text-2xl font-semibold">{data.title}</h3> */}
        <h3 className="text-2xl font-semibold">{data.news_obj.title}</h3>
        <h3 className="text-sm">
          <span className="font-bold">short by</span>{" "}
          {data.news_obj.author_name} / {formattedDate}
        </h3>

        {/* <p className="text-gray-600">{data.news_obj}</p> */}
        <p className="text-gray-600">{data.news_obj.content}</p>

        <h6 className="text-[12px]">
          read more at{" "}
          {/* <a href={data.url} target="_blank">
            {data.source.name}
          </a> */}
          <a href={data.news_obj.source_url} target="_blank">
            {data.news_obj.source_name}
          </a>
        </h6>

        <LikeButton newsId={data.hash_id} />
        <BookmarkIcon className="h-6 w-6" onClick={saveNewsDataHandler} />
      </div>


    </div>
  );
}
