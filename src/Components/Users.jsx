import React, { useEffect, useState } from "react";
import "./Users.css";
import ReactPaginate from "react-paginate";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Pagination } from "antd";
import "antd/dist/antd.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [pageCount, setPageCount] = useState(0);
  console.log("Page Count:", pageCount);
  // const { id } = useParams();
  const itemPerPage = 10;
  let pageVisited = pageCount * itemPerPage;
  // pageVisited = +pageVisited;

  const totalPages = Math.ceil(users.length / itemPerPage);
  const pageChange = ({ selected }) => {
    setPageCount(selected);
  };

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
        console.log(data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((e) => e.id !== id));
  };
  const handleEdit = () => {};
  console.log("PageVisited: ", pageVisited);
  return (
    <div className="container">
      <br />
      <input
        type="text"
        name="name"
        placeholder=" Search by any field "
        onChange={(e) => setSearchData(e.target.value)}
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
          .filter((e) => {
            if (searchData === "") return e;
            else if (
              e.name.includes(searchData) ||
              e.email.includes(searchData) ||
              e.role.includes(searchData)
            ) {
              return e;
            }
            return e;
          })
          .slice(pageVisited, pageVisited + itemPerPage)
          .map((e) => (
            <tr key={e.id}>
              <input type="checkbox" />

              <td> {e.name} </td>
              <td> {e.email} </td>
              <td> {e.role} </td>
              <td className="btn">
                <button onClick={handleEdit}>
                  {" "}
                  <AiFillEdit />{" "}
                </button>
                <button onClick={handleDelete}>
                  {" "}
                  <AiFillDelete />{" "}
                </button>
              </td>
            </tr>
          ))}
      </table>
      <br />
      <br />
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

export default Users;
