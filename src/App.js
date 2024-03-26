import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Loan from "./Pages/Loan";
import LoanDetailPage from "./Pages/LoanDetailPage";
import CreateCustomer from "./Pages/CreateCustomer";
import UserDetails from "./Pages/UserDetails";
import Defaultors from "./Pages/Defaultors";
import Account from "./Pages/Account";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/creatcustomer" element={<CreateCustomer />} />
          <Route path="/customerDetails/:id" element={<UserDetails />} />

          <Route path="/loan" element={<Loan />} />
          <Route path="/loandetails" element={<LoanDetailPage />} />

          <Route path="/defaultors" element={<Defaultors />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
