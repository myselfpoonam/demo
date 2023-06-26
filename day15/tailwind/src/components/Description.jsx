import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

const Description = ({ addToCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.log("Error fetching item:", error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Nav />
      <div className="ml-20 mr-20 pt-96 rounded-3xl flex-col shadow-2xl">
        <h1>
          <div className="text-orange-500 font-bold text-9xl flex justify-center items-center mt-20">
            Item Description
          </div>
        </h1>
        <br />
        <h2 className="flex justify-center font-bold mt-20 text-8xl items-center">
          {item.title}
        </h2>
        <br />
        <div className="flex justify-center mt-20 ">
          <img src={item.image} alt={item.title} />
        </div>

        <p className="text-center text-7xl mt-20">{item.description}</p>
        <div className="flex justify-center shadow-3xl mt-20">
          <button
            className="bg-orange-500  p-10 mt-4 w-2/5 rounded-3xl"
            onClick={() => addToCart(datas)}
          >
            <p className="flex justify-center text-6xl"> Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
