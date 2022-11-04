import React from 'react'
import { useState } from 'react'
import { addAll,deleteAll,removeAll } from '../actions/action'
import {useSelector,useDispatch} from 'react-redux'
import allReducers from '../reducer/AllReducer'

const All = () => {

    const [inputData, setInputData] = useState('')
    const list = useSelector((state)=>state.allReducers.list)
    const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="subContainer">
        <figure>
        <figcaption>Add your task here 😊</figcaption>
        </figure>
        <div className="addItem">
          <input type="text" placeholder="Add task"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)} 
          />
          <button className='add-btn' onClick={()=> dispatch(addAll(inputData), setInputData(''))}>Add</button>
        </div>

        <div className='showItems'>
            {
                list.map((elem)=>{
                    return (
                       <div className='eachItem' key={elem.id}>
                            <h3>{elem.data}</h3>
                            <div className='all-btn'>
                                <button className='add-btn' title='Delete Item' onClick={()=> dispatch(deleteAll(elem.id), setInputData())}>Delete</button>
                            </div>
                        </div> 
                    )
                })
            }
           <div className='showItems'>
            <div>
                <button className='btn effect' data-sm-link-text="remove All" onClick={()=>dispatch(removeAll)}>
                    <span>Check List</span></button>
            </div>
            </div> 

        </div>
      </div>
    </div>
  )
}

export default All