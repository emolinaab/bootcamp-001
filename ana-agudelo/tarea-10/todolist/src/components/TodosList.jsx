import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo} from '../features/todoSlice';


function TodosList(){
    const todos = useSelector(state =>state.todos);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id));
    }
    return (
        <ul className='todoslist'>
            {todos.map(todos =>(
                <li className='licomponent' key={todos.id}><br/>
                    <sub className='description'>-&nbsp;{todos.description}&nbsp;</sub>
                    <button className='btndelete' onClick={() => deleteHandler(todos.id)}>❌</button>
                </li>
            ))}
        </ul>
    )
}

export default TodosList;