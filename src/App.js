import logo from "./logo.svg";
import "./App.css";
import TodoClass from "./component/TodoClass";
import Todo from "./component/Todo";
import Example1Todo from "./component/Example1";
import Counter from "./component/Example2";
import User from "./component/Example3";

function App() {
  return (
    <div className="App">
      <h6>useState Hook Using Class & Function </h6>
      <User/>
      <Counter/>
      <Example1Todo/>
      <TodoClass />
      <Todo/>
    </div>
  );
}

export default App;
