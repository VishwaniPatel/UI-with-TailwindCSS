useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://inshorts.com/api/in/en/news?category=top_stories&max_limit=${pageSize}&include_card_data=true&page=${currPage}`
    );
    setLoading(false);

    console.log(response, "<<<");
    if (!response.data.data.news_list.length) {
      setLastList(true);
      return;
    }
    setUserList((prevUserList) => [
      ...prevUserList,
      ...response.data.data.news_list,
    ]);
  };

  if (!lastList && userList.length > 0 && currPage !== 0 && !loading) {
    fetchData();
  }
}, [currPage, lastList, userList, loading]);

const fetchData = async () => {
  const response = await axios
    .get(
      `https://inshorts.com/api/in/en/news?category=top_stories&max_limit=${currPage}&include_card_data=true`
    )
    .then(({ data }) => {
      const newList = [];
      data.data.news_list.forEach((item) => newList.push(item));
      // setNewsData((oldList) => [...oldList, ...newList]);
      setNewsData(newList);
    });

  console.log(newsData, "<<<");
  setPrevPage(currPage);
};

const onScroll = () => {
  if (listInnerRef.current) {
    console.log("In Scroll");
    const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    if (scrollTop + clientHeight === scrollHeight) {
      console.log("In Scroll fetch data");
      setCurrPage(currPage + 3);
      // pageSize += 3;
      fetchData();
    }
  }
};
useEffect(() => {
  fetchData();
}, []);
