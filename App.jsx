import React, {propTypes} from 'react';
import ReactDOM from 'react-dom';
const fruits= [
    {
        name: 'apple',
        colors: ['red', 'green', 'pink']
    },
    {
        name: 'banana',
        colors: ['yellow', 'green']
    },
    {
        name: 'orange',
        colors: ['orange']
    }
    ];

const App = ({ list }) => {
	return (
		<div>{list[0].name}</div>
	);
};

App.propTypes = {
	list: React.PropTypes.array
};
export default App
ReactDOM.render(<App list={fruits}/>, document.getElementById('container'));