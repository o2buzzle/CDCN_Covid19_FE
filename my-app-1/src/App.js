import "./App.css";
import * as React from "react";
import MainPage from "././pages/MainPage";
import Homepage from "././pages/Homepage";
import Pricing from "./pages/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//     {'Copyright © '}
//     <Link color="inherit" href="https://mui.com/">
//       Your Website
//     </Link>{' '}
//     {new Date().getFullYear()}
//     {'.'}
//   </Typography>
//   );
// }
// function Dango() => {
//	console.log("Hello")
// }
function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/create" element={<MainPage />} />
					<Route path="/price" element={<Pricing />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
