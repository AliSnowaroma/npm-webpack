import React, { Component, PropTypes } from 'react';
import  { Header }  from '@components'
import './Home.less'
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test">
        <Header></Header>
        <div class="pic_box">
          <img src={require('./images/01.jpg')} alt=""/>
          <img src={require('./images/02.png')} alt=""/>
          <img src={require('./images/03.jpg')} alt=""/>
        </div>
      </div>
    );
  }
}

export default Home;

