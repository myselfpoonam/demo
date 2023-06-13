
// import React from 'react'
// import { useState } from "react";

// const App = () => {
//   const[count, setCount]=useState(0)

//   return (
//     <div>
//       <button onClick={() => setCount(count+1)}>Inc</button>
//       {count}
//       <button onClick={() => setCount(count-1)}>Dec</button>
//     </div>
//   )
// }

// export default App
import React from 'react' 
import Search from './components/Search'

const App = () => {
  return (
    <div className="todo-list" >
      <div className="center-div">
      <h2>Today ToDo List</h2>
      <Search />
     
    </div>
    </div>
  )
}

export default App
