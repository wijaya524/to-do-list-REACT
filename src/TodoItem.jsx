import DeleteButton from './DeleteButton';
import TodoItemBody from './TodoItemBody';
 
// eslint-disable-next-line react/prop-types
function TodoItem({ title, body, id, onDelete, createdAt }) {
 return (
   <div className="todo-item">
     <TodoItemBody title={title} body={body} createdAt={createdAt} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default TodoItem;