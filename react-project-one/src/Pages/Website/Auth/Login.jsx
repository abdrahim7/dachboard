import { useContext, useState } from "react";
import Header from "../../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router";
import { User } from "../Constext/Context";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, sePassword] = useState([]);
  const [accept, setAccept] = useState(false);
  const [Err, setErr] = useState(true);

  const navi = useNavigate();
  const userNow = useContext(User);
 
  async function Submit(e) {
    e.preventDefault();
    setAccept(true);

    try {
    
      //send data to backend
      let res = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      //stock the token an userDeatails in the useConstext
      const token = res.data.data.token;
      const userDeatails = res.data.data.user;
     


      userNow.setAuth({ token, userDeatails });
      navi("/dashboard"); //when the user is login we send him to the dashboard
      //...............................
    } catch (err) {
      if (err.response.status === 401) {
        setErr(true);
      }
      setAccept(true);
    }
  }

  return (
    <div>
      <Header />
      <div className="formDiv">
        <form onSubmit={Submit} className="form">
          <label htmlFor="email">email : </label>
          <input
            className="input"
            
            id="email"
            type="email"
            placeholder="Enter your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password : </label>
          <input
            className="input"
            
            
            id="password"
            type="password"
            placeholder="Enter your Password..."
            value={password}
            onChange={(e) => sePassword(e.target.value)}
          />

          <div className="btndiv">
            <button className="btn" type="submit">
              Longin
            </button>
          </div>
          {Err && accept && (
           <p className="p_message">Wrong Email Or Password</p>
          )}
        </form>
      </div>
    </div>
  );
};
export default Login;
