import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../Website/Constext/Context";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [runUseEffect, setRunUseEffectn] = useState(0); //الهدف من هذه الحركة هو التخلص من التحميل المتكرر للابيانات

  const context = useContext(User);
  const token = context.auth.token;

  useEffect(() => {
    //we used this method to fetching data from servar
    axios
      .get("http://127.0.0.1:8000/api/user/show", {
        headers: {
          Accept: "application/json",
          Authorization: " Bearer " + token, // Add space after "Bearer"
        },
      })
      /* .then((res) => res.json()) */ //we use this expretion just with fetch data
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));
  }, [runUseEffect, token]);
  async function deleatUser(id) {
    try {
      //deleteing data of user we want remouv
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/user/delete/${id}`,
        {
          headers: {
            Authorization: " Bearer " + token,
          },
        }
      );
      if (res.status === 200) {
        setRunUseEffectn((prev) => prev + 1);
        console.log("Error");
        window.localStorage.removeItem("email");
      }
    } catch {
      console.log("faled load");
    }
  }

  async function refresh() {
    try {
      await axios
        .post(`http://127.0.0.1:8000/api/refresh`, null, {
          headers: {
            Authorization: " Bearer " + token,
          },
        })
        .then((data) =>
          context.setAuth((prev) => {
            //we chage the previos token by the new one and we save it in the constext
            return { ...prev, token: data.data.token };
          })
        );
    } catch (err) {
      console.log(err);
    }
  }

  const showUsers = users.map((user) => (
    <tr key={user.id}>
      <td className="td">{user.id}</td>
      <td className="td">{user.name}</td>
      <td className="td">{user.email}</td>

      <td className="td ">
        <div className="action">
          <i
            onClick={() => deleatUser(user.id)}
            className="fa-solid fa-trash icon deleat_icon"
          ></i>
          <Link to={`${user.id}`}>
            <i className="fa-solid fa-pen-to-square icon eadit_icon"></i>
          </Link>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="table_div">
      <table className="table">
        <thead>
          <tr>
            <th className="th">id</th>
            <th className="th">User</th>
            <th className="th">Email</th>
            <th className="th">action</th>
          </tr>
        </thead>
        <tbody>{showUsers}</tbody>
      </table>
      <button onClick={refresh}>Refresh Token</button>
    </div>
  );
};

export default Users;
