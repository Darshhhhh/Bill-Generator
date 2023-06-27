import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create/user" element={<Register />} />
        {/* <Route
          path="/user/dashboard"
          element={<ProtectedRoute Component={DashboardPage} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
