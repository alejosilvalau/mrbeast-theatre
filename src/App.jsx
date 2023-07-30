import { useState } from "react";
import mrBeastLogo from "./assets/mr-beast-logo.png";
import Button from "./components/Button";
import Display from "./components/Display";
import "./App.css";

function App() {
	const [videos, setVideos] = useState([]);

	const handleButtonPress = (newState) => {
		setVideos(newState);
	};

	return (
		<>
			<div className='header animation-container'>
				<img src={mrBeastLogo} className='logo' alt='mrbeast-logo' />
				<h1>MrBeast Theatre</h1>
			</div>
			<div className='display'>
				<Display videosList={videos} />
				<Button state={videos} onStateChange={handleButtonPress} />
			</div>
		</>
	);
}

export default App;
