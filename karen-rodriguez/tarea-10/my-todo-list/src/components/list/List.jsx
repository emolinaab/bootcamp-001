import React from 'react'
import ItemList from '../itemList/ItemList'
import { useSelector } from 'react-redux'
import './list.css'

export default function List() {
  const {stateList}=useSelector(state => state.list)

  return (
    <div id="list">
      {
        stateList?.map((itemList,index)=>{
           return(<ItemList key={index} list={itemList}></ItemList>)
        })
      }
    </div>
  )
}
