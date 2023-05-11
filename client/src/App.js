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
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <AuthTopbar />
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <AuthTopbar />
                <Register />
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <Strip />
                <Topbar />
                <Home />
              </>
            }
          />
          <Route
            path="/membership"
            element={
              <>
                <Strip />
                <Topbar />
                <Membership />
              </>
            }
          />
          <Route
            path="/write"
            element={
              <>
                <Strip />
                <Topbar />
                <Write />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Strip />
                <Topbar />
                <About />
              </>
            }
          />
          <Route
            path="/setting"
            element={
              <>
                <Strip />
                <Topbar />
                <Single />
                <Setting />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Strip />
                <Topbar />
                <Single />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Strip />
                <Topbar />
                <Gallery />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
