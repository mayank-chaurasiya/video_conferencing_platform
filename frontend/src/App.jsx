import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing_page from "./pages/LandingPage/Landing_page.jsx";
import { Authentication } from "./pages/Authentication/Authentication.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing_page />} />
            <Route path="/auth" element={<Authentication />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
