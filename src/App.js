import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <h1>React Props:</h1>
      <hr></hr>
      <Products
        id="1"
        name="first"
        desc="This is props desc 1"
        amount="5"
        price={45}
      />
      <Products
        id="2"
        name="second"
        // desc='This is props desc 1'
        amount="5"
        price={65}
      />
      <Products
        id="3"
        name="third"
        desc='This is props desc 3'
        amount="545"
        price={65654}
      />
    </div>
  );
}

export default App;
