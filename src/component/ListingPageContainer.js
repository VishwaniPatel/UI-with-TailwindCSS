import React, { useRef, useEffect, useState } from "react";
import ListigPageComponent from "./ListingPageComponent";
import axios from "axios";

function ListingPageContainer(props) {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=reactjs&from=2023-06-26&sortBy=publishedAt&language=en&apiKey=f189294f53bf4073b0bf49bffdbf0e7c&pageSize=3&page=${currPage}`
      );
      console.log(response.data.articles, "<<<");
      if (!response.data.articles) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response.data.articles]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, userList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <ListigPageComponent
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      userList={userList}
    />
  );
}

export default ListingPageContainer;
