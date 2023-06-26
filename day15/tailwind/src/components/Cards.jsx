// // import React, { useEffect, useState } from "react";

// // const Cards = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     async function getData() {
// //       try {
// //         const response = await fetch("https://fakestoreapi.com/products", {
// //           method: "GET",
// //         });
// //         const value = await response.json();
// //         setData(value);
// //       } catch (err) {
// //         console.log("Error", err);
// //       }
// //     }
// //     getData();
// //   }, []);

// //   console.log(data);

// //   return (
// //     <>
// //       <div className="flex gap-40 flex-wrap ml-200 mt-40 justify-center">
// //         {data.map((items) => (
// //           <div className="flex flex-col h-46 w-1/6 p-20">
// //             <img src={items.image} className="h-44"></img>
// //             <div className="">{items.title}</div>
// //             <div className="">{items.price}</div>
// //             <button className="">ADD TO CART</button>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default Cards;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Cards = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products", {
//           method: "GET",
//         });
//         const value = await response.json();
//         setData(value);
//       } catch (err) {
//         console.log("Error", err);
//       }
//     }
//     getData();
//   }, []);

//   console.log(data);

//   return (
//     <>
//       <div className=" flex  flex-wrap bg-blue-100 mt-20 gap-20 ml-6 justify-center ">
//         {data.map((items) => (
//           <div className="p-8 w-1/5 h-46 flex flex-col shadow-2xl">
//             <img src={items.image} className="h-4/5 " />
//             <div className="text-center h-20 mt-8 text-5xl font-bold">
//               {items.title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Cards;
