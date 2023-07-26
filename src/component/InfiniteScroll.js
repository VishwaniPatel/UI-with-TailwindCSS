import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CardUI from "./CardUI";
function InfiniteScroll() {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(3);
  const [prevPage, setPrevPage] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [lastList, setLastList] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=technology&from=2023-06-26&sortBy=publishedAt&language=en&apiKey=f189294f53bf4073b0bf49bffdbf0e7c&pageSize=3&page=${currPage}`
      );
      console.log("Response", response);
      if (!response.data.articles.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setNewsList([...newsList, ...response.data.articles]);
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
