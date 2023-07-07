import React from 'react';
import { ListTypes } from '../../Interfaces/TodoTypes';

interface Props {
  task: ListTypes;
  completeTask: (taskNameToDelete: string) => void;
  handleComplete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ task, completeTask, handleComplete }) => {
  const taskStyle = task.completed ? { color: 'red' } : {};

  return (
    <div className='flex bg-blue-200 shadow-xl  rounded-xl p-2 text-xl justify-between mt-4'>
          <input
            className='w-5 h-5 mt-3'
            type='checkbox'
            checked={task.completed}
            onChange={() => handleComplete(task.id)}
          />
      <div className='mt-1' style={taskStyle}>
        {task.text}
      </div>
      <div className='flex justify-center gap-2'>
        <div>
        </div>
        <div>
          <button
            onClick={() => {
              completeTask(task.text);
            }}
            className='p-2 text-sm bg-red-500 font-bold border-2 border-red-800 text-xs text-white rounded-xl'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
