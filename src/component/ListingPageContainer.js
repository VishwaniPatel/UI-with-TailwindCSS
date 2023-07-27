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
        `https://inshorts.com/api/in/en/news?category=top_stories&max_limit=10&include_card_data=true`
      );
      console.log(response.data.data.news_list, "<<<");
      if (!response.data.articles) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response.data.data.news_list]);
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
