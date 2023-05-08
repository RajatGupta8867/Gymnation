import Home from "./pages/homePage/Home";
import Topbar from "./Components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AuthTopbar from "./Components/topbar/AuthTopbar";

function App() {
  return (
    <div className="App">
      <AuthTopbar/>
      {/* <Topbar /> */}
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write/> */}
      {/* <Setting /> */}
      <Login />
      {/* <Register /> */}
    </div>
  );
}

export default App;
