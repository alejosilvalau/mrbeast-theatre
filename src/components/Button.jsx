// import { useCallback } from "react";
import { fetchVideos } from "../helpers/youtube";
import PropTypes from "prop-types";
import "./Button.less";

const Button = ({ state, onStateChange }) => {
	function randomSort() {
		return Math.random() - 0.5;
	}

	const handleClick = () => {
		onStateChange(state.sort(randomSort));
		window.location.reload();
	};

	if (state.length === 0) {
		fetchVideos(
			"UCX6OQ3DkcsbYNE6H8uQQuVA",
			"" // Put your api key here
		).then((fetchedVideos) => {
			onStateChange(fetchedVideos);
		});
	}

	// Optional: If you want to fetch videos immediately when the component mounts, you can use useEffect
	// useEffect(() => {
	// 	handleClick();
	// }, [handleClick]);

	return (
		<div className='center'>
			<div className='select-button' onClick={handleClick}>
				<strong>Boring!</strong>
			</div>
		</div>
	);
};

Button.propTypes = {
	state: PropTypes.array.isRequired,
	onStateChange: PropTypes.func.isRequired,
};

export default Button;
