import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CallForPapers from "./components/CallForPapers";
import ImportantDates from "./components/ImportantDates";
import Organizers from "./components/Organizers";
import Footer from "./components/Footer";

function App() {
	return (
		<Router basename="/LLM-MI-MICCAI-2025">
			<div className="min-h-screen bg-gray-50">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/call-for-papers" element={<CallForPapers />} />
					<Route path="/important-dates" element={<ImportantDates />} />
					<Route path="/organizers" element={<Organizers />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
