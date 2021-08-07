
import {TodoField} from "./modules/TodoField";
import {Input} from "./modules/Input"
import {Heading} from "./modules/Heading";
import './App.css';
import {useState} from "react";

function App() {

    const [opentodos, setOpentodos] = useState([])
    const [progresstodos, setProgresstodos] = useState([])
    const [donetodos, setDonetodos] = useState([])



  return (
      <div className="container">
        <Heading className="header-box"/>
        <Input className="input-box" />
          <div className="content-box">
          <TodoField className="open-box" title="OPEN" todos={opentodos}/>
          <TodoField className="progress-box" title="IN PROGRESS" todos={progresstodos}/>
          <TodoField className="done-box" title="DONE" todos={donetodos}/>
        </div>
      </div>
  )
}

export default App;
