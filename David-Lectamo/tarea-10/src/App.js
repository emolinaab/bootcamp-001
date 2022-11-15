import React from 'react'
import Filters from './components/Filters'
import AddTask from './containers/AddTask'
import TaskList from './containers/TaskList'
import './styles/App.css'

const App = () => (
  <div>
    <h1 className='title'>Tasks To Do</h1>
    <div className='container'>
      <AddTask />
      <TaskList />
    </div>
    <Filters />
  </div>
)

export default App
