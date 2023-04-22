import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SmallEvents from "./pages/SmallEvents";
import BigEvents from "./pages/Bigevent";
import Corporate from "./pages/Corporate";
import About from "./pages/About";
import Testimonial from "./pages/Testimonial"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SmallEvents" element={<SmallEvents/>} />
        <Route path="/BigEvent" element={<BigEvents/>} />
        <Route path="/Corporate" element={<Corporate/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Testimonial" element={<Testimonial/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
