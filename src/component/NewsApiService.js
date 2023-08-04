import axios from "axios";

const likeEndpoint =
  "https://react-http-be1b0-default-rtdb.firebaseio.com/like.json";

// Function to get like/dislike data for a news article (newsId)
export const getLikeData = async (newsId) => {
  const response = await axios.get(`${likeEndpoint}/${newsId}.json`);
  return response.data;
};

// Function to update the like/dislike data for a news article (newsId)
export const updateLikeData = async (newsId, userAction) => {
  const response = await axios.patch(`${likeEndpoint}/${newsId}.json`, {
    userAction,
  });
  return response.data;
};
