import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'React',
      List: []
    };

    this.changeInput = this.changeInput.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  render() {
    return (
      <section>
        <form onSubmit={this.addListItem}>
          <label>
            名字:
              <input
              type="text"
              name="todoitem"
              value={this.state.inputValue}
              onChange={this.changeInput} />
          </label>
          <button type="submit" >提交#{this.state.List.length}</button>
        </form>
        <ul>
          {
            this.state.List.map((item, index) => {
              return (
                <TodoItem
                  key={index}
                  index={index}
                  content={item}
                  deleteTodoItem={this.deleteItem.bind(this)}
                />
              )
            })
          }
        </ul>
      </section>
    )
  }

  changeInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  addListItem(e) {
    e.preventDefault();
    if (!this.state.inputValue.length) {
      return
    }
    this.setState((state) => {
      return {
        List: [state.inputValue, ...state.List],
        inputValue: ''
      }
    })
  }

  deleteItem(index) {
    this.setState(prevState => {
      prevState.List.splice(index, 1)
      return {
        List: prevState.List
      }
    })
  }

}