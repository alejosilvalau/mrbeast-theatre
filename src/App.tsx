import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mrBeastLogo from "./assets/Mr-Beast-Logo.png";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

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
			<h1>MrBeast ❤️</h1>
			<h1>Subscribe!!!</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					Sub count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App
