import React, { useEffect, useState } from "react";
import useCurrentUser from "./useCurrentUser";

const Profile = () => {
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });
  const { id } = useCurrentUser();
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(
          `https://rest-api-bjno.onrender.com/id/${id}`,
          {
            method: "GET",
          }
        );
        const value = await response.json();
        setData(value);
      } catch (err) {
        console.log("Error", err);
      }
    }
    getUser();
  }, []);
  console.log(id);
  return (
    <div>
      <h2 style={{ color: "black", marginLeft: 800, fontSize: 50 }}>Profile</h2>
      <p style={{ color: "black", marginLeft: 760, fontSize: 20 }}>
        First Name: {data.firstName}
      </p>
      <p style={{ color: "black", marginLeft: 760, fontSize: 20 }}>
        Last Name: {data.lastName}
      </p>
      <p style={{ color: "black", marginLeft: 760, fontSize: 20 }}>
        Email: {data.email}
      </p>
    </div>
  );
};

export default Profile;
