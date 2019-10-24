import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './components'
import Home from './pages/Home'

const app_container = document.getElementById('app');

class App extends React.Component{
  render(){
  	return (
  		<div>
  		    <Home></Home>
  		</div>
  	)
  }
}

class main extends React.Component {
	render() {
		return (
			ReactDOM.render(
				<App></App>,
				app_container
			)
		);
	}
}

new main().render();
