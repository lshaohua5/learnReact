import React, { Component, Fragment } from 'react';
import TodoList from './TodoList';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Clock计时器</h1>
        <h2>我的react第一个demo-Clock计时器</h2>
        <h3>{this.state.time.toLocaleTimeString()}</h3>
        <TodoList />
      </Fragment>
    )
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }
  // 组件插入DOM 之后执行 React 就会调用ComponentDidMount()生命周期函数 === 挂载
  componentDidMount() {
    // this.timerId = setInterval(() => {
    //   this.tick()
    // }, 1000)
  }
  // 当组件从DOM中被移除  React 就会调用 componentWillUnmount()生命周期函数 == 卸载
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
}
