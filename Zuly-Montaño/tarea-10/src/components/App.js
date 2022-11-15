import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/visibleTodoList';
import '../css/App.css'

const App = () => (
    <section className='container'>
        <h1>TO DO LIST</h1>
        <div className='todo'>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    </section>
);
export default App;