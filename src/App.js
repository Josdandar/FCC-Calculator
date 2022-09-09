import './App.css';
import Josdandarlogo from "./images/josdanda-logo.png"

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img 
        src={Josdandarlogo}
        className="logo"
        alt="Logo to show" />
      </div>
      <div className="calculator-container">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className='line'></div>
      </div>
    </div>
  );
}

export default App;
