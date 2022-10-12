import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todoSlice';

function TodosForm(){
    const [uId, uIdState] = useState(1);  
    const [todo, todoState] = useState({
        description:''
    });

    const dispatch = useDispatch();

    const inputHandler = e => {
        todoState({
            ...todo,
            [e.target.name]:e.target.value,
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo({
            ...todo,
            id: uId,
        }));
        uIdState(uId+1);
        document.getElementById("inputtodo").value="";
    };

    return (
        <form onSubmit={submitHandler} className='todoinput'>
            <input name="description" type="text" id="inputtodo" autoComplete='off' onChange={inputHandler} ></input>
            <button>ADD</button><br/>
        </form>
    )
}

export default TodosForm;