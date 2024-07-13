import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const userInput = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};


function App() {
  const [input, setInput] = useState(userInput);
  
  const inputIsValid = input.duration >= 1

  function handleInputChange(inputIdentifier, newValue) {
    setInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput input={input} onChange={handleInputChange} />
      {inputIsValid ? <Result input={input} /> : <p className="center">Input is not valid.</p>}
    </>
  );
}

export default App;
