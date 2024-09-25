import PropTypes from 'prop-types';
import showFormattedDate from './date';
 
function TodoItemBody({ title, body, createdAt }) {
 return (
   <div className="todo-item__body">
     <h3 className="todo-item__title">{title}</h3>
     <p className="todo-item__date">{showFormattedDate(createdAt)}</p>
     <p className="todo-item__body">{body}</p>
   </div>
 );
}

TodoItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}
 
export default TodoItemBody;