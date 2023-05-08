import Home from "./pages/homePage/Home";
import Topbar from "./Components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write/> */}
      <Setting />
    </div>
  );
}

export default App;
