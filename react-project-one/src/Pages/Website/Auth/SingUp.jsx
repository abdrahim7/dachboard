import Header from "../../../components/Header";
import { useContext, useState } from "react";
import axios from "axios";
import { User } from "../Constext/Context";
import { useNavigate } from "react-router";

const SingUp = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, sePassword] = useState([]);
  const [passwordR, sePasswordR] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [accept, setAccept] = useState(false);

  const userNow = useContext(User);
  const navi = useNavigate();

  async function Submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      //send data to backend
      let res = await axios.post(`http://127.0.0.1:8000/api/register`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordR,
      });
      //stock the token an userDeatails in the useConstext
      const token = res.data.data.token;
      const userDeatails = res.data.data.user;

      userNow.setAuth({ token, userDeatails });
      navi("/dashboard");//when the user is login we send him to the dashboard
      //...............................
    } catch (err) {
      if (err.response.status === 422) {
        setEmailError(true);
      }
      setAccept(true);
    }
  }
  return (
    <div>
      <Header />
      <div className="formDiv">
        <form onSubmit={Submit} className="form">
          <label htmlFor="name">Name : </label>
          <input
            className="input"
            id="name"
            type="text"
            placeholder="Enter your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name.length < 2 && accept && (
            <p className="p_message">Name must be more than 2 Character </p>
          )}
          <label htmlFor="email">email : </label>
          <input
            className="input"
            id="email"
            type="email"
            placeholder="Enter your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && accept && (
            <p className="p_message">Email Is already been taken</p>
          )}
          <label htmlFor="password">Password : </label>
          <input
            className="input"
            id="password"
            type="password"
            placeholder="Enter your Password..."
            value={password}
            onChange={(e) => sePassword(e.target.value)}
          />
          {password.length < 5 && accept && (
            <p className="p_message">you need to enter more than 5 caracter</p>
          )}
          <label htmlFor="password">Repeat Your Password : </label>
          <input
            className="input"
            id="Repeatpass"
            type="password"
            placeholder="Repeat Your Password..."
            value={passwordR}
            onChange={(e) => sePasswordR(e.target.value)}
          />
          {passwordR !== password && accept && (
            <p className="p_message">your password are not sumiler</p>
          )}
          <div className="btndiv">
            <button className="btn" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
