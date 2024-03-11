import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
