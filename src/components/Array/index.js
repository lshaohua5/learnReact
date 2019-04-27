import React, { Component } from 'react';
import { of } from 'rxjs';

class Array extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4, 5, 1, 1, 1, 1, 3]
    }
  }

  render() {
    return (
      <div>
        <h1>数组去重</h1>
        <p>数据:{this.state.arr.join('-')}</p>
        {/* <p>去重后的数组：{this.unique().join('=')}</p> */}
      </div>
    )
  }
  // React 生命周期函数
  componentDidMount() {
    // this.unique()
    this.unique1()
  }

  // 去重  1
  unique = () => {
    let { arr } = this.state;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr
  }

  unique1 = () => {
    let { arr } = this.state;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr.indexOf(arr[i]), i)
      if (arr.indexOf(arr[i]) !== i) {
        arr.splice(i, 1);
        i--
      }
    }
    console.log(arr, 'unique1')
  }

}

export default Array