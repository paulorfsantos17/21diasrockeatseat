import Display from "../display/Display";
import Button from "../button/Buttons";
import "./Calculator.css";
import { useState } from "react";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const Calculator = () => {
  const [state, setState] = useState(initialState);

  const handleAddDigit = (n) => {
    if (n === "." && state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;
    console.log(state.displayValue)
    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + n;
    setState({ ...state, displayValue, clearDisplay: false });
    if (n !== ".") {
      const i = state.current;
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      
      values[i] = newValue;
      setState({ ...state, values });
    }
  };

  const handleSetOperation = (operation) =>  {
    if (state.current === 0) {
      setState({ operation, current: 1, clearDisplay: true })
  } else {
      const equals = operation === '='
      const currentOperation = state.operation

      console.log(state.values)
      const values = [...state.values]
      try {
          values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
          if (isNaN(values[0]) || !isFinite(values[0])) {
              this.clearMemory()
              return
          }
      } catch(e) {
          values[0] = this.state.values[0]
      }

      values[1] = 0

      this.setState({
          displayValue: values[0],
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: !equals,
          values
      })
  }
  }
  const handleClearMemory = () => {
    setState({ ...initialState });
  };
  return (
    <div className="calculator">
      <Display value={state.displayValue}></Display>
      <Button label="AC" click={handleClearMemory} triplo operation></Button>
      <Button label="+" click={handleSetOperation} operation></Button>
      <Button label="1" click={handleAddDigit}></Button>
      <Button label="2" click={handleAddDigit}></Button>
      <Button label="3" click={handleAddDigit}></Button>
      <Button label="-" click={handleSetOperation} operation></Button>
      <Button label="4" click={handleAddDigit}></Button>
      <Button label="5" click={handleAddDigit}></Button>
      <Button label="6" click={handleAddDigit}></Button>
      <Button label="*" click={handleSetOperation} operation></Button>
      <Button label="7" click={handleAddDigit}></Button>
      <Button label="8" click={handleAddDigit}></Button>
      <Button label="9" click={handleAddDigit}></Button>
      <Button label="/" click={handleSetOperation} operation></Button>
      <Button label="." click={handleAddDigit}></Button>
      <Button label="0" click={handleAddDigit}></Button>
      <Button label="=" operation doublo></Button>
    </div>
  );
};

export default Calculator;
