import { BrowserRouter, Route, Routes } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// import NewRecord from "./components/Add/NewRecordForm";
import Home from "./Pages/Home";

import IncomeList from "./Pages/Income/IncomeList";
import Navbar from "./components/Navigation/Navbar";
import Profile from "./Pages/Users/Profile/Profile";
import Register from "./Pages/Users/Register/Register";
import Login from "./Pages/Users/Login/Login";
import ExpensesList from "./Pages/Expenses/ExpensesList";
import Dashboard from "./Pages/Dashboard/Dashboard";

import EditContent from "./components/EditContent/EditContent";
import UserProfileExpList from "./Pages/Users/Profile/UserProfileExpList";
import UserProfileIncList from "./Pages/Users/Profile/UserProfileIncList";
import UpdateProfile from "./Pages/Users/Profile/UpdateProfile";
import AddIncome from "./Pages/Income/AddIncome";
import AddExpense from "./Pages/Expenses/AddExpense";
import PrivateProtectRoute from "./components/Navigation/PrivateProtectRoute";
import AdminRoute from "./components/Navigation/AdminRoute";
import NotAdmin from "./components/NotAdmin/NotAdmin";

const options = {
  timeout: 50000,
  position: positions.BOTTOM_CENTER,
};

const App = () => {
  return (
     <Provider template={AlertTemplate} {...options}>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-income" element={<AddIncome/>} />
          <Route path="/add-expense" element={<AddExpense/>} />
          <Route exact path="/profile" element={<Profile/>} />
          {/* <AdminRoute exact path="/dashboard" element={<Dashboard/>} /> */}
          {/* <PrivateProtectRoute
            exact
            path="/user-profile-expenses"
            element={<UserProfileExpList/>}
          /> */}
          <Route
            exact
            path="/user-profile-income"
            element={<UserProfileIncList/>}
          />
          <Route exact path="/not-admin" element={<NotAdmin/>} />

          {/* <PrivateProtectRoute
            exact
            path="/update-profile"
            element={<UpdateProfile/>}
          />
 */}
          {/* <PrivateProtectRoute exact path="/edit" element={<EditContent/>} /> */}
          {/* <PrivateProtectRoute
            exact
            path="/user-expenses"
            element={<UserExpenses/>}
          /> */}
          {/* <PrivateProtectRoute
            exact
            path="/add-expense"
            element={<AddExpense/>}
            />
          <PrivateProtectRoute exact path="/add-income" element={<AddIncome/>} />
             */}

          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          {/* <PrivateProtectRoute exact path="/profile" element={<Profile/>} />
          <PrivateProtectRoute exact path="/incomes" element={<IncomeList/>} />
          <PrivateProtectRoute
            exact
            path="/expenses"
            element={<ExpensesList/>}
          /> */}
        </Routes>
       </BrowserRouter>
     </Provider>
  );
};

export default App;
