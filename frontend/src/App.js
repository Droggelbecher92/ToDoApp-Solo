import {TodoField} from "./modules/TodoField";
import {Input} from "./modules/Input"
import {Heading} from "./modules/Heading";
import {getTodos, postTodo} from "./services/requests";
import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [alltodos, setAlltodos]= useState([])
    const [opentodos, setOpentodos] = useState([])
    const [progresstodos, setProgresstodos] = useState([])
    const [donetodos, setDonetodos] = useState([])

    useEffect(()=> {
        getTodos().then(todos => setAlltodos(todos))
    },[])

    useEffect(() => {
        setOpentodos(alltodos.filter(todo => todo.status === "OPEN"))
        setProgresstodos(alltodos.filter(todo => todo.status === "IN_PROGRESS"))
        setDonetodos(alltodos.filter(todo => todo.status === "DONE"))
    },[alltodos])



    return (
        <div className="container">
            <Heading className="header-box"/>
            <Input className="input-box"/>
            <div className="content-box">
                <TodoField className="open-box" title="OPEN" todos={opentodos}/>
                <TodoField className="progress-box" title="IN PROGRESS" todos={progresstodos}/>
                <TodoField className="done-box" title="DONE" todos={donetodos}/>
            </div>
        </div>
    )
}

export default App;
