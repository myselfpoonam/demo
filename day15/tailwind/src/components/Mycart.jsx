import React from "react";
import Nav from "./Nav";

const Mycart = ({ cartItems, removeItems }) => {
  const totalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };
  return (
    <div>
      <Nav />
      <h2 className="text-xl text-blue-500 font-bold text-center">My Cart</h2>
      <div className="ml-96 mr-96 flex justify-center mt-96 h-5/6  shadow-2xl">
        {cartItems.length === 0 ? (
          <div className="text-8xl text-orange-500 font-bold"> Empty Cart</div>
        ) : (
          <ul className="mt-10 h-5/6 w-5/6">
            {cartItems.map((item) => (
              <li key={item.id} className="flex p-8">
                <img src={item.image} alt={item.title} className="h-96 w-96" />
                <div className="w-4/6 pt-36 flex justify-around">
                  <div className="w-1/2 text-5xl font-bold mb-20">
                    {item.title}
                  </div>

                  <div className="ml-8 flex pt-2 text-6xl text-green-700 ">
                    ${item.price}
                  </div>
                </div>

                <button
                  className="w-56 h-56 mt-9 text-5xl bg-orange-500 shadow-2xl rounded-3xl ml-2"
                  onClick={() => removeItems(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
            <div className="mt-8 mb-9 text-6xl text-orange- 500 font-bold text-center">
              Total Price: ${totalPrice()}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Mycart;
