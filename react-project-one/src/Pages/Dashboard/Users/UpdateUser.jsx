import { useEffect, useState } from "react";

import Form from "../../../components/Forms/Form";
//update users
const UpdateUser = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  const id = window.location.pathname.split("/").slice(-1)[0];

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
      });
  }, []);
 
  return (
    <>
      
      <div style={{ width: "100%" }}>
        <div style={{fontSize:"30px",margin:"15px"}}>Update User :</div>
        <Form
          button="Update"
          name={name}
          email={email}
          endPoint={`user/update/${id}`}
          navigate="dashboard/users"
          LocalStorage={false}
          updateStyle={true}
          btnupdateStyle={true}
        />
      </div>
    </>
    
  );
};

export default UpdateUser;
