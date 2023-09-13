import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2>Wellcome To React Redux</h2>
      <input type="text" className="control-form" name="" placeholder="" /><br/>
      <button className="btn btn-primary mb-2">+</button>
      <button className="btn btn-danger mb-2">-</button>
    </div>
  );
}

export default App;
