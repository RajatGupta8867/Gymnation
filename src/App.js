import Home from "./pages/homePage/Home";
import Topbar from "./Components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AuthTopbar from "./Components/topbar/AuthTopbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Strip from "./Components/strip/Strip";
import Footer from "./Components/footer/Footer";
import Gallery from "./pages/gallery/Gallery";
import Membership from "./pages/membership/Membership";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Strip />
        <Topbar />
        {/* <AuthTopbar/> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/write" element={<Write />} />
          <Route path="/profile" element={<Single />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
