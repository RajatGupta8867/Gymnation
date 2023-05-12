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
    <div className="App" style={{ boxSizing: "border-box" }}>
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
                <Home /> <Footer />
              </>
            }
          />
          <Route
            path="/membership"
            element={
              <>
                <Strip />
                <Topbar />
                <Membership /> <Footer />
              </>
            }
          />
          <Route
            path="/write"
            element={
              <>
                <Strip />
                <Topbar />
                <Write /> <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Strip />
                <Topbar />
                <About /> <Footer />
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
                <Setting /> <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Strip />
                <Topbar />
                <Single /> <Footer />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Strip />
                <Topbar />
                <Gallery /> <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
