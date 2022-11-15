import React from 'react';
import { addTask } from '../actions/actions';
import '../styles/AddTask.css';

const AddTask = ({ dispatch }) => {
	return(
		<div>
			<form onSubmit={(e) => {
        e.preventDefault();
        const {target} = e
		    const content = target.inputTask.value
        if (content === '') {
          return;
        }
        dispatch(addTask(content))
        target.inputTask.value = ''
      }} className='addTaskcontainer'>
				<input className='inputTask' name='inputTask'/>
				<button className='buttons' type='submit'>Add task</button>
			</form>
		</div>
	);
}

export default AddTask;