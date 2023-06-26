import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = ({ addToCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
        });
        const value = await response.json();
        setData(value);
      } catch (err) {
        console.log("Error", err);
      }
    }
    getData();
  }, []);

  console.log(data);

  return (
    <div className="">
      <div>
        <Nav />
        <div>
          {/* <Link to="/home"></Link> */}
          <div className=" flex  flex-wrap pt-96 gap-40 ml-6 justify-center ">
            {data.map((items) => (
              <div className="p-8 w-1/5 h-46 flex rounded-3xl flex-col shadow-2xl">
                <Link to={`/description/${items.id}`}>
                  <img src={items.image} className=" h-46 w-full" />

                  <div className="text-center h-20 mt-8 text-6xl font-bold">
                    {items.title}
                  </div>
                  <br />

                  <div className="text-center mt-20 text-6xl">
                    <p>${items.price}</p>
                  </div>
                </Link>

                <div className="rounded-3xl flex justify-center bg-blue-300 p-10 text-6xl mt-20">
                  <button onClick={() => addToCart(items)}>ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
