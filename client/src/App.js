import Home from "./pages/homePage/Home";
import Topbar from "./Components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AuthTopbar from "./Components/topbar/AuthTopbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Strip from "./Components/strip/Strip";
import Footer from "./Components/footer/Footer";
import Gallery from "./pages/gallery/Gallery";
import Membership from "./pages/membership/Membership";
import About from "./pages/about/About";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.checkUser.token));
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
              isAuth ? (
                <>
                  <Strip />
                  <Topbar />
                  <Home /> <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/membership"
            element={
              isAuth ? (
                <>
                  <Strip />
                  <Topbar />
                  <Membership /> <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/write"
            element={
              isAuth ? (
                <>
                  <Strip />
                  <Topbar />
                  <Write /> <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/about"
            element={
              isAuth ? (
                <>
                  <Strip />
                  <Topbar />
                  <About /> <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/setting"
            element={
              isAuth ? (
                <>
                  <Strip />
                  <Topbar />
                  <Single />
                  <Setting /> <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isAuth ? (
                <>
                  <Strip />
                  <Topbar />
                  <Single /> <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/gallery"
            element={
              isAuth ? (
                <>
                  <Strip />
                  <Topbar />
                  <Gallery /> <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
