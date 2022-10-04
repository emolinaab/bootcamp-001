import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../css/App.css';

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div  className='add-todo-list'>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch (addTodo(input.value) )
                input.value = ''
            }}>
                <input className='input' ref={node => input = node} />
                <button className='submit' type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)