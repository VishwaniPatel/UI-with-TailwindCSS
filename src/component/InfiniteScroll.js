import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CardUI from "./CardUI";
import NewsAPICard from "./NewsAPICard";
import { addNewsData } from "./NewsService";
function InfiniteScroll() {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [lastList, setLastList] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://inshorts.com/api/in/en/news?category=top_stories&max_limit=50&include_card_data=true&_page=${currPage}`
        // `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f189294f53bf4073b0bf49bffdbf0e7c&page=${currPage}&pageSize=3&language
        // =en`
      );
      console.log("Response", response);
      if (!response.data.data.news_list.length) {
        setLastList(true);
        return;
      }
      // if (!response.data.articles.length) {
      //   setLastList(true);
      //   return;
      // }
      setPrevPage(currPage);
      setNewsList([...newsList, ...response.data.data.news_list]);
      // setNewsList([...newsList, ...response.data.articles]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
    console.log(newsList);
  }, [currPage, lastList, prevPage, newsList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <div
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      {newsList.map((item, index) => (
        addNewsData({
          newsId: item.hash_id,
          likeCounter: 0,
        }),

        (<CardUI data={item} key={index}></CardUI>)
        // <NewsAPICard data={item} key={index}></NewsAPICard>
      ))}
    </div>
  );
}

export default InfiniteScroll;
