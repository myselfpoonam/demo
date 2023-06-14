
import React,{useState} from "react";
import Todo from "./Todo";

const Search = () => {
    const[input,setInput]=useState('');
    const [items,setItems]=useState([]);
// useEffect(()=>{
//   alert('TODO LIST APP');
// },[items])
    const itemChange = e =>{
        setInput(e.target.value);
  
  
  

      };
      const submit = e =>{
        e.preventDefault();

      
    }
    const listItems = ()=>{
     setItems((oldItems)=> {
    return[...oldItems,input ];
    
    
  });
  setInput('');
    

       
    //     props.onSubmit({
    //       id: Math.floor(Math.random() * 10000),
    //       text: input
    //     });
    //  setInput('');
    };
    
    
  return (
    <form className='todo-form' onSubmit={submit} >
      <input type="name" placeholder="Add a todolist...." value={input} onChange={itemChange} className="search-place " ></input>
      
      <button className="todo-btn" onClick={listItems}>Submit</button>
      <ol>
       
        {items.map((itemvalue) => {
         return<Todo text={itemvalue}/>
        })} 
      </ol>
    </form>
  )
}

export default Search
