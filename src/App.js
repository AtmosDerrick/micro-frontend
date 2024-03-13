import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Loan from "./Pages/Loan";
import LoanDetailPage from "./Pages/LoanDetailPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/loandetails" element={<LoanDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
