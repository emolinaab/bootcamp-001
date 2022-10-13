import React from 'react'

import {useDispatch } from 'react-redux'
import {deleteItemToList, completeItemToList} from '../../app/reducers/listSlice'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

import './itemList.css';

export default function ItemList({list}) {
  const dispatch = useDispatch();
  function handleCheck(){
    dispatch(completeItemToList(list.id))
    let itemValue = document.getElementById("itemValue")
    itemValue.style.textDecorationLine="line-through"
  }
    return (
    <div id={list.id} className='item' >
      <div id='itemValue'>❗ {list.value} </div>
      <div className='btnContainer'>
        <div className='btn-check' onClick={handleCheck}>
          <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
        </div>
        <div  className='btn-delete' onClick={()=>dispatch(deleteItemToList(list.id))}>
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}
