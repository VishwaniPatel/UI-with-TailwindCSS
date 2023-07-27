import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CardUI from "./CardUI";
function InfiniteScroll() {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(2);
  const [prevPage, setPrevPage] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [lastList, setLastList] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://inshorts.com/api/in/en/news?category=top_stories&max_limit=4&include_card_data=true&_page=${currPage}`
      );
      console.log("Response", response);
      if (!response.data.data.news_list.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setNewsList([...newsList, ...response.data.data.news_list]);
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
        <CardUI data={item} key={index}></CardUI>
      ))}
    </div>
  );
}

export default InfiniteScroll;
