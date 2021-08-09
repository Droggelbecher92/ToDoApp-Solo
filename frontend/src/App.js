import {TodoField} from "./modules/TodoField";
import {Input} from "./modules/Input"
import {Heading} from "./modules/Heading";
import {getTodos, postTodo} from "./services/requests";
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";


function App() {

    const [alltodos, setAlltodos]= useState([])
    const [opentodos, setOpentodos] = useState([])
    const [progresstodos, setProgresstodos] = useState([])
    const [donetodos, setDonetodos] = useState([])

    function getTodos(){
        return  axios.get('api/todo').then(result => setAlltodos(result.data))
    }


    function postTodo(description){
        return axios.post('api/todo', {description}).then(getTodos)
    }

    function putTodo(id){
        return axios.put('api/todo/'+id)
    }
    /*
    export function deleteTodo(){

    }*/

    useEffect(()=> {
        getTodos()
    },[])

    useEffect(() => {
        setOpentodos(alltodos.filter(todo => todo.status === "OPEN"))
        setProgresstodos(alltodos.filter(todo => todo.status === "IN_PROGRESS"))
        setDonetodos(alltodos.filter(todo => todo.status === "DONE"))
    },[alltodos])





    return (
        <div className="container">
            <Heading className="header-box"/>
            <Input className="input-box" addTodo={postTodo}/>
            <div className="content-box">
                <TodoField className="open-box" title="OPEN" todos={opentodos}/>
                <TodoField className="progress-box" title="IN PROGRESS" todos={progresstodos}/>
                <TodoField className="done-box" title="DONE" todos={donetodos}/>
            </div>
        </div>
    )
}

export default App;
