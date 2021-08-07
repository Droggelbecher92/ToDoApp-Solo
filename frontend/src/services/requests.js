import axios from "axios";

export function getTodos(){
   return  axios.get('api/todo').then(result => result.data)
}


export function postTodo(description){
   return axios.post('api/todo', {description}).then(getTodos)
}
/*
export function putTodo(){

}

export function deleteTodo(){

}*/
