import "./App.css";
import FocusFlowLanding from "./components/LandingPage";
import { AuthProvider } from "./components/Pages/AuthContext";
import { ThemeProvider } from "./components/Pages/ThemeContext";
import Dashboard from "./components/Pages/Dashboard";
import ProtectedRoute from "./components/Pages/ProtectedRoute";
import Signin from "./components/Pages/Signin";
import Signup from "./components/Pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FocusFlowLanding />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
