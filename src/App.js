import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/HomePage";

function App() {
	console.log("test");
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} exact />
			</Routes>
		</Router>
	);
}

export default App;
