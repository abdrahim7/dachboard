import { Route, Routes } from "react-router";
import "./index.css";
import "./all.min.css";

import SingUp from "./Pages/Website/Auth/SingUp";
import Login from "./Pages/Website/Auth/Login";
import Home from "./Pages/Website/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Dashboard/Users/Users";
import UpdateUser from "./Pages/Dashboard/Users/UpdateUser";
import CreatUser from "./Pages/Dashboard/Users/CreatUser";
import RequireAuth from "./Pages/Website/Auth/RequireAuth";
function App() {
  return (
    <div>
      <Routes>
        {/* Public routes so any one can access to them */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        {/* protected routes so only the registered user can access to  */}
        <Route  element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UpdateUser />} />
            <Route path="users/create" element={<CreatUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
