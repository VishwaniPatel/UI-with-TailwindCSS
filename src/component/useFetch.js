import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(
        "https://inshorts.com/api/in/en/news?category=top_stories&max_limit=10&include_card_data=true"
      );
      console.log(res.data.data.news_list);
      await setList((prev) => [...prev, ...res.data.data.news_list]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);
  useEffect(() => {
    console.log(list);
  }, [list]);
  return { loading, error, list };
}

export default useFetch;
