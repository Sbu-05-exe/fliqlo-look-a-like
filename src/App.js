import React, {useState, useEffect} from 'react';
import './App.css';

const getTime = () => {

	const today = new Date();

	const hour = today.getHours().toString().padStart(2,'0');
	const minute = today.getMinutes().toString().padStart(2, '0');
	const second = today.getSeconds().toString().padStart(2, '0');

	return `${hour}:${minute}:${second}`

}

const App = () => {

	const [currentTime, setCurrentTime] = useState(getTime())

	// const [hour, setHours] = useState(today.getHours());
	// const [minute, setMinutes] = useState(today.getMinutes());
	// const [second, setSeconds] = useState(today.getSeconds());

	useEffect(() => {


		setInterval(() => setCurrentTime(getTime()), 1000);
		
	});

	return (
		<div>
			<h1> {currentTime} </h1>
		</div>
	)
}

export default App;