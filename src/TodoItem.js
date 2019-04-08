// React 父子组件传值
import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        return (
            <li onClick={this.deleteItem.bind(this)}>{this.props.content}</li>
        )
    }
    deleteItem() {
        console.log(this.props)
        this.props.deleteTodoItem()
    }
}