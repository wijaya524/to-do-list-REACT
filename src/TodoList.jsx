import TodoItem from './TodoItem';
 
// eslint-disable-next-line react/prop-types
function TodoList({ todos, onDelete }) {
 return (
   <div className="todo-list">
     {
       // eslint-disable-next-line react/prop-types
       todos.map((todo) => (
         <TodoItem 
         key={todo.id} 
         {...todo}
         id={todo.id}
         onDelete={onDelete}
         />
       ))
     }
   </div>
 );
}
 
export default TodoList;