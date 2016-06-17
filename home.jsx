import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component{
	render(){
		return <h1>Hello Word in React Js</h1>
	}
}
export default Home
ReactDOM.render(<Home/>, document.getElementById('container'));