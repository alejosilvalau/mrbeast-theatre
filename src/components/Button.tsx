import React, { FC } from "react";
import "./Button.css";
import { fetchVideos } from "../helpers/youtube";

const Button: FC = () => {
	const [videos, setVideos] = React.useState([]);

	const handleClick = () => {
		fetchVideos("UC6Jq69F6Xc624y01X985IUw").then((videos) => {
			setVideos(videos);
			console.log(videos);
		});
	};

	return (
		<button id='everybodydance' onClick={handleClick}>
			<span>Boring!</span>
		</button>
	);
};

export default Button;
