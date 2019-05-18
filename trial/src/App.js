import React from 'react';
import {link, Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}





	render() {
		return (
			<div className="App">
			  <Header/>
				<HomePage />
				{/* <SignUp /> */}
				{/* <Login/> */}
				<footer className="App-footer" />
			</div>
		);
	}
}

export default App;
