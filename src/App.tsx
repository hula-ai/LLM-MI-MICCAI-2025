import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CallForPapers from "./components/CallForPapers";
import ImportantDates from "./components/ImportantDates";
import Organizers from "./components/Organizers";
import Footer from "./components/Footer";

function App() {
	return (
		<Router basename="/">
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<Navbar />
				<div className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/call-for-papers" element={<CallForPapers />} />
						<Route path="/important-dates" element={<ImportantDates />} />
						<Route path="/organizers" element={<Organizers />} />
					</Routes>
				</div>

				{/* Microsoft CMT Acknowledgment */}
				<p className="text-xs text-center text-gray-500 px-4 py-2">
					The Microsoft CMT service was used for managing the peer-reviewing
					process for this conference. This service was provided for free by
					Microsoft and they bore all expenses, including costs for Azure cloud
					services as well as for software development and support.
				</p>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
