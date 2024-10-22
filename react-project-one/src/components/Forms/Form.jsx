/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { User } from "../../Pages/Website/Constext/Context";
const Form = (props) => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, sePassword] = useState([]);
  const [passwordR, sePasswordR] = useState([]);
  const [emailError, setEmailError] = useState([]);

  const userNow = useContext(User);

  console.log(userNow);

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, [props.name, props.email]);

  async function Submit(e) {
    e.preventDefault();
    try {
      //send data to backend
      let res = await axios.post(
        `http://127.0.0.1:8000/api/${props.endPoint}`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        }
      );
      //stock the token an userDeatails in the useConstext
      const token = res.data.data.token;
      const userDeatails = res.data.data.user;

      console.log(`the token is :+${token}`);
      console.log(userDeatails);
      console.log(res);

      userNow.setAuth({ token, userDeatails });
      //...............................
    } catch (err) {
      setEmailError(err.response.status);
    }
  }
  return (
    <div className="formDiv">
      <form
        onSubmit={Submit}
        className={props.updateStyle ? "formUpdateStyel" : "form"}
      >
        <label htmlFor="name">Name : </label>
        <input
          className="input"
          id="name"
          type="text"
          placeholder="Enter your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">email : </label>
        <input
          className="input"
          id="email"
          type="email"
          placeholder="Enter your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/*  {emailError === 422 && accept ? (
          <p className="p_message">Email Is already been taken</p>
        ) : null} */}
        <label htmlFor="password">Password : </label>
        <input
          className="input"
          id="password"
          type="password"
          placeholder="Enter your Password..."
          value={password}
          onChange={(e) => sePassword(e.target.value)}
        />
        {/* {password.length < 5 && accept ? (
          <p className="p_message">you need to enter more than 5 caracter</p>
        ) : null} */}
        <label htmlFor="password">Repeat Your Password : </label>
        <input
          className="input"
          id="Repeatpass"
          type="password"
          placeholder="Repeat Your Password..."
          value={passwordR}
          onChange={(e) => sePasswordR(e.target.value)}
        />
        {/*  {passwordR !== password && accept ? (
          <p className="p_message">your password are not sumiler</p>
        ) : null} */}
        <div className="btndiv">
          <button
            className={props.btnupdateStyle ? "btnUpdateStyle" : "btn"}
            type="submit"
          >
            {props.button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
