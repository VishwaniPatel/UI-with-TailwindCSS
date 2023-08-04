import React, { useState, useEffect } from "react";
import axios from "axios";
import { HeartIcon } from "@heroicons/react/24/outline";

const LikeButton = ({ newsId }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState(null);

  useEffect(() => {
    // Fetch the initial like/dislike counts and user preferences from the API
    fetchLikeDislikeCounts();
  }, [newsId]);

  const fetchLikeDislikeCounts = async () => {
    try {
      const response = await axios.get(
        `https://react-http-be1b0-default-rtdb.firebaseio.com/like/${newsId}.json`
      );
      const data = response.data;
      if (data) {
        setLikes(data.likes || 0);
        setDislikes(data.dislikes || 0);
        setUserAction(data.userAction || null);
      } else {
        // If newsId doesn't exist in the database, set initial values
        setLikes(0);
        setDislikes(0);
        setUserAction(null);
      }
    } catch (error) {
      console.error("Error fetching like/dislike counts:", error);
    }
  };

  const handleLikeDislikeClick = async (action) => {
    try {
      // Check if the user is authenticated
      //   const user = firebase.auth().currentUser;
      //   if (!user) {
      //     // If the user is not authenticated, prompt them to sign in
      //     // (You can handle this based on your authentication flow)
      //     alert("Please sign in to like/dislike the article.");
      //     return;
      //   }

      if (userAction === action) {
        // If the user clicks the same action again, remove the like/dislike
        await axios.delete(
          `https://react-http-be1b0-default-rtdb.firebaseio.com/like/${newsId}.json`
        );
        setLikes((prevLikes) =>
          action === "like" ? prevLikes - 1 : prevLikes
        );
        setDislikes((prevDislikes) =>
          action === "dislike" ? prevDislikes - 1 : prevDislikes
        );
        setUserAction(null);
      } else {
        // If the user clicks a different action, update the like/dislike
        await axios.patch(
          `https://react-http-be1b0-default-rtdb.firebaseio.com/like/${newsId}.json`,
          {
            userAction: action,
          }
        );
        if (userAction === "like") {
          setLikes((prevLikes) => prevLikes - 1);
        } else if (userAction === "dislike") {
          setDislikes((prevDislikes) => prevDislikes - 1);
        }
        setUserAction(action);
        setLikes((prevLikes) =>
          action === "like" ? prevLikes + 1 : prevLikes
        );
        setDislikes((prevDislikes) =>
          action === "dislike" ? prevDislikes + 1 : prevDislikes
        );
      }
    } catch (error) {
      console.error("Error updating like/dislike:", error);
    }
  };

  return (
    <div>
      <button onClick={() => handleLikeDislikeClick("like")}>
        <HeartIcon
          className={`block h-6 w-6 ${
            userAction === "like" ? "text-red-500" : "text-gray-500"
          }`}
        />
      </button>
      <span>{likes}</span>

      {/* Render the same icon with a different color for the dislike action */}
      <button onClick={() => handleLikeDislikeClick("dislike")}>
        <HeartIcon
          className={`block h-6 w-6 ${
            userAction === "dislike" ? "text-blue-500" : "text-gray-500"
          }`}
        />
      </button>
      <span>{dislikes}</span>
    </div>
  );
};

export default LikeButton;
