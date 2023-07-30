import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Display.css";

const Display = ({ videosList }) => {
	const [videoIds, setVideoIds] = useState([]);
	const randomIndex = Math.floor(Math.random() * videosList.length);

	useEffect(() => {
		if (videosList.length > 0) {
			const Ids = videosList.map((obj) => obj.id.videoId);
			setVideoIds(Ids);
			console.log("hello");
		}
	}, [videosList]);
	console.log(videoIds);

	return (
		<div>
			<iframe
				className='videoFrame'
				allowFullScreen
				src={`https://www.youtube.com/embed/${videoIds[randomIndex]}`}
			></iframe>
		</div>
	);
};

Display.propTypes = {
	videosList: PropTypes.array.isRequired,
};

export default Display;
