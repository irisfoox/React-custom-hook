import logo from './logo.svg';
import './App.css';
import Exercise, { YearOld } from './YearOld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <YearOld year="1993" name="moshe"/>
    </div>
  );
}

export default App;
