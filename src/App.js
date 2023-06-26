import './App.css';
import { useState } from 'react';

//*Imports for components
import OperationButton from './OperationButton';

function App() {
  
  const [resValue, setResValue] = useState("");
  
  const addNumber = (number) => {
    setResValue(resValue + number);
  }

  function resetInput(){
    setResValue("");
  }

  const evaluateOperation = (operator)=>{
    if(operator == '='){
      let res = resValue;
      setResValue("");
      setResValue(eval(res));
    }else{
      setResValue(resValue + operator);
    }
  };

  return (
    <div>
      <input type='text' value={resValue} disabled={true}/>

      <button onClick={resetInput}>C</button>

      <button onClick={()=>addNumber("1")}>1</button>
      <button onClick={()=>addNumber("2")}>2</button>
      <button onClick={()=>addNumber("3")}>3</button>
      <OperationButton onClick={evaluateOperation} operation="+"/>

      <button onClick={()=>addNumber("4")}>4</button>
      <button onClick={()=>addNumber("5")}>5</button>
      <button onClick={()=>addNumber("6")}>6</button>
      <OperationButton onClick={evaluateOperation} operation="-"/>

      <button onClick={()=>addNumber("7")}>7</button>
      <button onClick={()=>addNumber("8")}>8</button>
      <button onClick={()=>addNumber("9")}>9</button>
      <OperationButton onClick={evaluateOperation} operation="*"/>

      <button onClick={()=>addNumber("0")}>0</button>
      <OperationButton onClick={evaluateOperation} operation="/"/>
      <OperationButton onClick={evaluateOperation} operation="="/>
    </div>
  );
}

export default App;
