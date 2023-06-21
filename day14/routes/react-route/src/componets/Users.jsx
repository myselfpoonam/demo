import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import useCurrentUser from "./useCurrentUser";

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        const startTime = Date.now();

        const response = await fetch(
          "https://rest-api-bjno.onrender.com/users",
          {
            method: "GET",
          }
        );
        const resp = await response.json();
        const endTime = Date.now();
        // console.log(resp);
        setData(resp);
        setLoading(false);
        // const loadingTime = endTime - startTime;
        // console.log("Loading Time:", loadingTime);
      } catch (err) {
        console.log("Error", err);
        // setLoading(false);
      }
    }
    getData();
  }, []);

  const { isAuth, id } = useCurrentUser();
  if (!isAuth) {
    return <h1 style={{ color: "black" }}>Login First</h1>;
  }

  return (
    <div className="list">
      <h2 style={{ color: "black" }}>List of all register users</h2>
      {loading ? (
        <h3 style={{ color: "black" }}>Loading......</h3>
      ) : (
        <div className="table">
          <table>
            <tr>
              <th style={{ color: "black" }}>FirstName</th>
              <th style={{ color: "black" }}>LastName</th>
              <th style={{ color: "black" }}>Email</th>
            </tr>
            {data.map((datas) => (
              <tr>
                <td style={{ color: "black" }}>{datas.firstName}</td>
                <td style={{ color: "black" }}>{datas.lastName}</td>
                <td style={{ color: "black" }}>{datas.email}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
