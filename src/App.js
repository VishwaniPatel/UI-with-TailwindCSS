import "./App.css";
import Main from "./component/Main";
import Header from "./component/HeaderDesign";
import InfiniteScroll from "./component/InfiniteScroll";
import ListingPageContainer from "./component/ListingPageContainer";
import { useAuth0 } from "@auth0/auth0-react";
import { json } from "react-router-dom";
function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  return (
    <>
      <Header></Header>
      <div>
        <div className="container mx-auto">
          {/* <Main></Main> */}
          <InfiniteScroll />
          {/* <ListingPageContainer /> */}
          <ul>
            <li>
              <button onClick={loginWithPopup}>Login with Popup</button>
            </li>
            <li>
              <button onClick={loginWithRedirect}>Login with Redirect</button>
            </li>
            <li>
              <button onClick={logout}> Logout</button>
            </li>
          </ul>
          <h3>User is {isAuthenticated ? "logged in" : "Not logged in"}</h3>
          {isAuthenticated && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </div>
      </div>
    </>
  );
}

export default App;
