import React, { FC, useCallback } from "react";
import "./Button.css";
import { fetchVideos } from "../helpers/youtube";

const Button: FC = ({ videos, setVideos }) => {
	const handleClick = useCallback(() => {
		fetchVideos(
			"UCX6OQ3DkcsbYNE6H8uQQuVA",
			"AIzaSyDAhQhFtDKV9m0kJDrrMFGENIrDnxQ2sss"
		).then((videos) => {
			setVideos(videos);
		});
	}, []);

	console.log(videos);
	return (
		<button id='everybodydance' onClick={handleClick}>
			<span>Boring!</span>
		</button>
	);
};

export default Button;
