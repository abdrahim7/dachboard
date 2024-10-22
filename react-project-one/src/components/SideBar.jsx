import {  NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar" >
      <NavLink  className="sid_link" to="/dashboard/users" >
        <i className="fa-solid fa-users-line user_icon"></i><p>Users</p>
      </NavLink>
      <NavLink className="sid_link" to="/dashboard/users/create">
        <i className="fa-solid fa-user-plus user_icon"></i><p>New User</p>
      </NavLink>
    </div>
  );
};

export default SideBar;
