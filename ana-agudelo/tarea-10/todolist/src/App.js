import './App.css';
import TodosList from './components/TodosList';
import TodosForm from './components/TodosForm';

function App() {

  return (
    <div className="App">
      <body>
        <main>
          <h1>TODO LIST</h1>
          <TodosForm />
          <TodosList />
        </main>
      </body>
    </div>
  );
}

export default App;
