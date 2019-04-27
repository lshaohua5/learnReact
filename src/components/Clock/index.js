import React, { Component, Fragment } from 'react';
// import TodoList from '../../TodoList';



export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      arr: [1, 2, 3, 4, 1, 1, 1, 3, 21, 2, '1']
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Clock计时器</h1>
        <h2>我的react第一个demo-Clock计时器</h2>
        <h3>{this.state.time.toLocaleTimeString()}</h3>
        <h4>{this.state.arr}</h4>
       
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
    this.unique3()
  }
  // 当组件从DOM中被移除  React 就会调用 componentWillUnmount()生命周期函数 == 卸载
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  unqui() {
    let { arr } = this.state, result = [];
    console.log(arr)
    arr.forEach(item => {
      if (result.indexOf(item) === -1) {
        result.push(item)
      }
    })
    console.log(result)
  }

  unique() {
    let { arr } = this.state, i = 0;
    console.log(arr)
    for (i; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          j--;
          console.log(arr[j])
        }
      }
    }
    console.log(arr)
  }
  unique1() {
    let { arr } = this.state, i = 0;
    console.log(arr)
    for (i; i < arr.length; i++) {
      console.log(arr.indexOf(arr[i]))
      if (arr.indexOf(arr[i]) !== i) {
        arr.splice(i, 1);
        i--
      }
    }
    console.log(arr)
  }
  unique2() {
    let { arr } = this.state;
    let arr1 = arr.filter((item, index, self) => {
      return self.indexOf(item) === index
    })
    console.log(arr1)
  }

  unique3() {
    let { arr } = this.state, obj = {}, resulet = [];
    arr.forEach(index => {
      if (!obj[arr[index]]) {
        obj[arr[index]] = index
        resulet.push(arr[index])
      }
    })
    console.log(resulet)

  }
}
