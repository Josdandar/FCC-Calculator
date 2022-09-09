import './App.css';
import Josdandarlogo from "./images/josdanda-logo.png"
import Button from './components/Button';
import Display from './components/Display';
import ClearButton from './components/ClearButton';

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
        <Display />
        <div className="line">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="line">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="line">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className="line">
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='line'>
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
