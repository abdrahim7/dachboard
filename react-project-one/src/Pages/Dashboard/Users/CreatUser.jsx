import Form from "../../../components/Forms/Form";

const CreatUser = () => {
  return (
    <div style={{ width: "80%" }}>
      <div style={{ fontSize: "30px", margin: "15px" }}>Create User :</div>
      <Form
        button="Create"
        endPoint={`user/create`}
        navigate="dashboard/users"
        LocalStorage={false}
        updateStyle={true}
        btnupdateStyle={true}
      />
    </div>
  );
};

export default CreatUser;
