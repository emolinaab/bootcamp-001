import "./App.css";
import TodoPage from "./components/TodoPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoDetailsPage from "./components/TodoDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
    children: [
      {
        path: "todos/:id",
        element: <TodoDetailsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
