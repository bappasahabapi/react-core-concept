import './App.css';
import Accordion from './component/accrodianExample/Accrdion';
import FilterableList from './component/filteringList/FilterList';
import SyncedInputs from './component/syncedInput/SyncedInput';
import Calculator from './component/tempConverter/Calculator';

function App() {
  return (
    <div className="App">
      <h1  style={{paddingBottom:'15px', textAlign:'center'}}>Lifting Up State</h1>
      <Calculator/>
      <br /> <br /> <br />
      <Accordion/>
      <br />
      <SyncedInputs/>
      <br />
      <FilterableList/>
    </div>
  );
}

export default App;
