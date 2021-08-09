import {TodoField} from "./modules/TodoField";
import {Input} from "./modules/Input"
import {Heading} from "./modules/Heading";
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";


function App() {

    const [alltodos, setAlltodos]= useState([])
    const opentodos = alltodos.filter(todo => todo.status === "OPEN")
    const progresstodos = alltodos.filter(todo => todo.status === "IN_PROGRESS")
    const donetodos = alltodos.filter(todo => todo.status === "DONE")

    function getTodos(){
        return  axios.get('api/todo').then(result => setAlltodos(result.data))
    }


    function postTodo(description){
        return axios.post('api/todo', {description}).then(getTodos)
    }

    function putTodo(id){
        return axios.put('api/todo/'+id).then(getTodos)
    }

    function deleteTodo(id){
        return axios.delete('api/todo/'+id).then(getTodos)
    }

    useEffect(()=> {
        getTodos()
    },[])


    return (
        <div className="container">
            <Heading className="header-box"/>
            <Input className="input-box" addTodo={postTodo}/>
            <div className="content-box">
                <TodoField className="open-box" title="OPEN" todos={opentodos} nextTodo ={putTodo}/>
                <TodoField className="progress-box" title="IN PROGRESS" todos={progresstodos} nextTodo ={putTodo}/>
                <TodoField className="done-box" title="DONE" todos={donetodos} nextTodo={deleteTodo}/>
            </div>
        </div>
    )
}

export default App;
