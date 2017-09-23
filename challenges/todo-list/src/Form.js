import React from 'react';
import TodoItem from './todoItem';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      title: '',
      body: '',
      finished: false
    }

    this.createTodo = this.createTodo.bind(this);
  }

  componentWillMount() {
    this.setState({
      todos: this.props.state
    })
  }

  createTodo(e) {
    e.preventDefault();

    let newTodo = {
      title: this.state.title,
      body: this.state.body,
      finished: false
    }

    // because we don't want to edit 
    // the local state directly this
    // will produce more reliable code 
    let newState = this.state.todos
    newState.push(newTodo)

    this.setState({
      todos: newState,
      title: '',
      body: ''
    })
  }

  render() {
    console.log(this.state)
    const Data = this.state.todos;
    const todoItems = Data.map((todo, idx) => (
      <TodoItem todo={todo} />
    ))
    return(
      <div>
      <ul style={{ listStyleType: 'none' }}>
        {todoItems}
      </ul>
      <form onSubmit={this.createTodo} style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: 300 }}>
        Title: <input type='text' value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
        Body: <input type='text' value={this.state.body} onChange={e => this.setState({ body: e.target.value })} />
        <button>Create Todo</button>
      </form>
      </div>
    )
  }
}

export default Form