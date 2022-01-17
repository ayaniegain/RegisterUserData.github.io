import "./App.css";
import LoginPage from "./components/UserData/LoginPage";
import RegisterPage from "./components/UserData/RegisterPage";
import MyProfile from "./components/DashBoard/MyProfile";
import OtherUser from "./components/DashBoard/OtherUser";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterPage/>} exact />
        <Route path="/loginpage" element={<LoginPage/>} exact />
        <Route path="/otheruser" element={<OtherUser/>} exact />
        <Route path="/myprofile" element={<MyProfile/>} exact />
      </Routes>
    </div>
  );
}

export default App;
