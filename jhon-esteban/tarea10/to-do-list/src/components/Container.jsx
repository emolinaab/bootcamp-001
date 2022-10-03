import React from 'react'
import List from './List';
import PrincipalForm from './PrincipalForm';
import { useState } from 'react';


const Container = () => {

    const [list, setList] = useState([])

   
    const handleAddItem = addItem => {
      setList([...list, addItem])
    };

  return (
    <div className='container'>
      {}
      <PrincipalForm handleAddItem={handleAddItem} />
      {}
      <List list={list} setList={setList} />
    </div>
  )
}

export default Container