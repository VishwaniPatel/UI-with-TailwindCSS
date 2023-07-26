import { React } from "react";

function ListingPageComponent({ onScroll, listInnerRef, userList }) {
  return (
    <div>
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        {userList.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={item.urlToImage}></img>
              <p>Name: {item.title}</p>
              <p>Trips: {item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListingPageComponent;
