import React from 'react';
 
class TodoInput extends React.Component {
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '',
           body: '',
        }
      
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onNameChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }
      
      onTagChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        this.props.addTodo(this.state);
      }

 render() {
   return (
     <form className='todo-input' onSubmit={this.onSubmitEventHandler}>
       <label htmlFor="title">Title</label>
       <input type="text" id='title' maxLength={50} placeholder="Title" value={this.state.title} onChange={this.onNameChangeEventHandler} />
       <label htmlFor="body">Description</label>
       <input type="text" placeholder="Description" value={this.state.body} onChange={this.onTagChangeEventHandler} />
       <button type="submit">Tambah</button>
     </form>
   )
 }
}
 
export default TodoInput;
