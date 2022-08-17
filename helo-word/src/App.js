import logo from './logo.svg';
import './App.css';
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <div className="App">
        <h1>Hello Word</h1>
        <span> 
          <AiFillGithub size={50} /> 
          <p>Github:</p> <a href="https://github.com/paulorfsantos17">Paulo Santos</a>
        </span>
    </div>
  )
}

export default App;
