import './App.css';
import Josdandarlogo from "./images/josdanda-logo.png"
import Button from './components/Button';
import Display from './components/Display';
import ClearButton from './components/ClearButton';
import { useState } from "react";
import { evaluate } from "mathjs"; 

function App() {

  const [input, setInput] = useState(''); /*Creating state if we update with setInput it will update on display as well*/

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () =>{
    if(input){ //empty strings are falsy
      setInput(evaluate(input));
    }else{
      alert("PLEASE TYPE A VALUE TO CONTINUE...")
    }
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img 
        src={Josdandarlogo}
        className="logo"
        alt="Logo to show" />
      </div>
      <div className="calculator-container">
        <Display input={input}/>
        <div className="line">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="line">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="line">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="line">
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='line'>
          <ClearButton handleClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

/*Challenge, create logo component */ 