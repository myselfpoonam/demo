import React, { FC, useState, ChangeEvent } from 'react';
import { ListTypes } from '../../Interfaces/TodoTypes';
import TodoList from './TodoList';

const Todo: FC = () => {
  const [task, setTask] = useState<string>('');
  const [todo, setTodo] = useState<ListTypes[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTodo = ():void => {
    const newTodo: ListTypes = {
      id: todo.length + 1,
      text: task,
      checked: false,
      status: false,
      completed: false,
    };

    setTodo([...todo, newTodo]);
    setTask('');
    console.log(task)

};
const completeTask =(taskNameToDelete:string):void=>{
    setTodo(todo.filter((task)=>{
        return task.text != taskNameToDelete
    }))


}
const handleComplete = (id: number): void => {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };


  return (
    <div className='p-6  flex justify-center'>
      <div className=' p-10 bg-white mt-44 shadow-2xl rounded-xl'>
      <div className='flex justify-center'>
        <div className='text-4xl text-blue-900 font-bold'>Todo List</div>
      </div>
      <div className='mt-8 flex gap-3 justify-between '>
        <div>
          <input
            type='text'
            className='border-2 p-2 text-xl shadow-lg  border-blue-400 rounded-xl'
            value={task}
            onChange={handleChange}
            placeholder='Add todo items'
          />
        </div>
        <div >
        <button
          type='submit'
          onClick={handleAddTodo}
          className='border-2 bg-blue-200 text-white shadow-lg font-bold p-2 text-xl border-blue-400 rounded-xl'
        >
          Add Todo
        </button>

      </div>
          </div>
      <div >
        {todo.map((task:ListTypes,key:number)=>{
            return <TodoList task={task} key={key} completeTask={completeTask} handleComplete={handleComplete}/>
        })}
      </div>
      </div>
      </div>
   
    
  );
};

export default Todo;
