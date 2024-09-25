// eslint-disable-next-line react/prop-types
function DeleteButton({ id, onDelete }) {
    return <button className='todo-item__delete' onClick={() => onDelete(id)}>Delete</button>
  }
   
  export default DeleteButton;