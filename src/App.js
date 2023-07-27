import "./App.css";
import Main from "./component/Main";
import Header from "./component/HeaderDesign";
import InfiniteScroll from "./component/InfiniteScroll";
import ListingPageContainer from "./component/ListingPageContainer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="dark:bg-dark">
        <div className="container mx-auto">
          {/* <Main></Main> */}
          <InfiniteScroll />
          {/* <ListingPageContainer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
