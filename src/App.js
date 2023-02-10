import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Profile2 from "./Pages/Profile2/Profile2";
import Tweetpage from "./Pages/Tweet/Tweetpage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Profile2" element={<Profile2 />}/>
          <Route path="/Tweetpage" element={<Tweetpage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

