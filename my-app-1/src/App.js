import "./App.css";
import * as React from "react";
import MainPage from "./pages/MainPage";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Link from '@mui/material/Link';

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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
