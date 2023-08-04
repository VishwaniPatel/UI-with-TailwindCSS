import axios from "axios";
const likeData =
  "https://react-http-be1b0-default-rtdb.firebaseio.com/likes.json";

// axios
// .post('https://react-http-be1b0-default-rtdb.firebaseio.com/likes.json', likeData)

// to add newsData detail
export const addNewsData = async (news) => {
  console.log(news);
  return await axios.post(`${likeData}`, news);
};
