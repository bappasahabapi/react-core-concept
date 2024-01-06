import logo from "./logo.svg";
import "./App.css";
import TodoClass from "./component/TodoClass";
import Todo from "./component/Todo";

function App() {
  return (
    <div className="App">
      <h6>useState Hook Using Class & Function </h6>
      <TodoClass />
      <Todo/>
    </div>
  );
}

export default App;
