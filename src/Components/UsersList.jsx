import React, { useEffect, useState } from "react";
import "./UsersList.css";
import "antd/dist/antd.css";
import ReactPaginate from "react-paginate";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Pagination } from "antd";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  // Pagination Start
  const [pageCount, setPageCount] = useState(0);
  // console.log("Page Count:", pageCount);

  const itemPerPage = 10;
  let pageVisited = pageCount * itemPerPage;

  const totalPages = Math.ceil(users.length / itemPerPage);
  const pageChange = ({ selected }) => {
    setPageCount(selected);
  };

  // pagination end

  useEffect(() => {
    getUsersDetails();
  }, []);
  const getUsersDetails = () => {
    fetch(
      `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
      })
      // error
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  // Delete User data onClick
  const deleteUser = (selectedUser) => {
    let userAfterDeletion = users.filter((user) => {
      return user.id !== selectedUser;
    });
    setUsers(userAfterDeletion);
  };

  // Edit Data by Click
  const editUserDetails = () => {};
  console.log("PageVisited: ", pageVisited);
  return (
    <div className="container">
      <br />
      <input
        type="text"
        name="name"
        placeholder=" Search by any field "
        onChange={(e) => setSearchUser(e.target.value)}
      />

      <table className="table">
        <tr>
          <th>
            <input type="checkbox" />{" "}
          </th>
          <th>Name </th>
          <th>Email </th>
          <th> Role</th>
          <th>Action</th>
        </tr>

        {users
          //Search Data by Input

          .filter((user) => {
            if (searchUser === "") return user;
            else if (
              user.name.includes(searchUser) ||
              user.email.includes(searchUser) ||
              user.role.includes(searchUser)
            ) {
              return user;
            }
          })
          .slice(pageVisited, pageVisited + itemPerPage)
          .map((user) => (
            <tr key={user.id}>
              <input type="checkbox" />

              <td> {user.name} </td>
              <td> {user.email} </td>
              <td> {user.role} </td>
              <td className="btn">
                <button onClick={editUserDetails}>
                  {" "}
                  <AiFillEdit />{" "}
                </button>
                <button onClick={() => deleteUser(user.id)}>
                  {" "}
                  <AiFillDelete />{" "}
                </button>
              </td>
            </tr>
          ))}
      </table>
      <br />
      <br />

      {/* pagination */}

      <ReactPaginate
        className="pagination"
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={totalPages}
        onPageChange={pageChange}
        containerClassName={<Pagination />}
      />
    </div>
  );
}

export default UsersList;
