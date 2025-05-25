import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { isLoggedIn } from "./auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={isLoggedIn() ? "/dashboard" : "/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
