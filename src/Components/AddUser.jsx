import React, { useState } from "react";

function AddUser(props) {
  const [users, setUsers] = useState([]);

  const getUsersDetails = () => {
    fetch(
      `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const handleChange = (e) => {
    let { value, name } = e.target;

    setUsers({ ...users, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return props.trigger ? (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          placeholder="Enter User Name"
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter User Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter User Role"
          name="role"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input type="submit" value="Add User" />
      </form>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default AddUser;
