import React, { useEffect } from "react";
import CardUI from "./CardUI";

const NewsPage = ({ onScroll, listInnerRef, userList }) => {
  useEffect(() => {
    console.log(userList);
  }, userList);
  return (
    <div onScroll={onScroll} ref={listInnerRef}>
      <div>{userList}</div>
      {userList.map(
        (item, index) => console.log(item)
        // <CardUI data={item} key={index}></CardUI>
      )}
    </div>
  );
};

export default NewsPage;
