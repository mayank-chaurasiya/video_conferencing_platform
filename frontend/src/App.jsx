import "./App.css";
import Landing_page from "./pages/landing_page/Landing_page.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing_page />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
