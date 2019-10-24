import React, { Component } from 'react'
//import PureCdnComponentContainer from '@ali/dynamic-render';

export default class App extends Component {
  onLoad = (succeedComponents) => {
    // 这里获取到所有加载成功的组件信息
  }
  onError = (errorComponents) => {
    // 这里获取到所有加载失败的组件信息
  }
  render() {
    return (
      <div>
        测试
      </div>
    );
  }
}
