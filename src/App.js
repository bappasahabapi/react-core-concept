import logo from "./logo.svg";
import "./App.css";
import TodoClass from "./component/TodoClass";
import Todo from "./component/Todo";
import Example1Todo from "./component/Example1";
import Counter from "./component/Example2";

function App() {
  return (
    <div className="App">
      <h6>useState Hook Using Class & Function </h6>
      <Counter/>
      <Example1Todo/>
      <TodoClass />
      <Todo/>
    </div>
  );
}

export default App;
