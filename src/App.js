import "./App.css";
import Main from "./component/Main";
import Header from "./component/HeaderDesign";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto">
        <Main></Main>
      </div>
    </>
  );
}

export default App;
