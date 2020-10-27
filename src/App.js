import {useState} from "react";
import {ChromePicker} from "react-color";
import "./App.css";

function App() {
	const [color, setColor] = useState("#fff");
	const [showColorPicker, setshowColorPicker] = useState(false);

	return (
		<div className="App">
			<header className="App-header">
				<h1>30 Days of React</h1>
				<h2>Day 3 / Color Picker App</h2>
			</header>
			<div className="color-picker">
				<button
					style={{backgroundColor: color}}
					onClick={() =>
						setshowColorPicker(showColorPicker => !showColorPicker)
					}
				>
					{showColorPicker ? "Close Color Picker" : "Pick a Color"}
				</button>
				{showColorPicker && (
					<ChromePicker
						color={color}
						onChange={updateColor => setColor(updateColor.hex)}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
