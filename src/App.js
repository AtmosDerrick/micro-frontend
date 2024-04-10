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
import PendingLoans from "./Pages/PendingLoans";
import ActiveLoan from "./Pages/ActiveLoan";
import CompletedLoans from "./Pages/CompletedLoans";
import PendingLoanDetails from "./Pages/PendingLoanDetails";
import axios from "axios";
import { UserContext } from "./contextApi/UserContext";
import { UserContextProvider } from "./contextApi/UserContext";

function App() {
  axios.defaults.baseURL = "https://alphamega.gitplus.app/api/";
  axios.defaults.headers.common["Content-Type"] = "application/json";

  // axios.defaults.withCredentials = true;
  // axios.defaults.withXSRFToken = true;
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />

          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/creatcustomer" element={<CreateCustomer />} />
            <Route path="/customerDetails/:id" element={<UserDetails />} />

            <Route path="/loan" element={<Loan />} />
            <Route path="/loan/loandetails/:id" element={<LoanDetailPage />} />
            <Route
              path="/loan/pendingloandetails/:id"
              element={<PendingLoanDetails />}
            />

            <Route path="/loan/defaultors" element={<Defaultors />} />
            <Route path="/loan/pendingloan" element={<PendingLoans />} />
            <Route path="/loan/activeLoan" element={<ActiveLoan />} />
            <Route path="/loan/completedloans" element={<CompletedLoans />} />

            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
