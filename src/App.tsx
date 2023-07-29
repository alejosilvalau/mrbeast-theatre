import mrBeastLogo from "./assets/Mr-Beast-Logo.png";
import Button from "./components/Button";
import "./App.css";

function App() {
	return (
		<>
			<div>
				<a
					href='https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png'
					target='_blank'
				>
					<img src={mrBeastLogo} className='logo' alt='Vite logo' />
				</a>
			</div>
			<Button />
		</>
	);
}

export default App;
