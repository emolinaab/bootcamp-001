import React from 'react'
import { useState } from 'react';

const PrincipalForm = (forms) => {
    const { handleAddItem } = forms
    const [description, setDescription] = useState("")
  
    const handleSubmit = e => {
      e.preventDefault(); 
      
      handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        description
      })
      setDescription("")
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="to-do-list">
          <div className="principalInput">
            <input
              type="text"
              className="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter your task"
            />
            <button
              className="button blue"
              disabled={description ? "" : "disabled"}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    )
}

export default PrincipalForm