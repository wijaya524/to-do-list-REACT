import React from 'react';
import getInitialData from './data.js';
import showFormattedDate from './date.js';
import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput.jsx';

 
class TodoApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     todos: getInitialData()
   }

   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddTodoHandler = this.onAddTodoHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const todos = this.state.todos.filter(todo => todo.id !== id);
   this.setState({ todos });
 }


 onAddTodoHandler({ title, body }) {
   this.setState((prevState) => {
     return {
       todos: [
         ...prevState.todos,
         {
           id: +new Date(),
           title,
           body, 
           createdAt: showFormattedDate(new Date()), 
         }
       ]
     }
   });
 }
 
 render() {
   return (
  <div className="todo-app">
    <h1>Daftar Catatan</h1>
    <h2>Tambah Catatan</h2>
    <div className='todo-input-main'>
      <TodoInput addTodo={this.onAddTodoHandler} />
    </div>
    <h2>Daftar Catatan</h2>
    {this.state.todos.length ? <TodoList todos={this.state.todos} onDelete={this.onDeleteHandler} /> : <p>Tidak ada catatan</p>}
  </div>
   );
 }
}
 
export default TodoApp;