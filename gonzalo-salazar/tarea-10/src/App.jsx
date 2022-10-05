import "./App.scss";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const App = () => (
  <main className="App">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </main>
);

export default App;
