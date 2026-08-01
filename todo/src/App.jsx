import './App.css'
import FocusFlowLanding from './components/LandingPage';
import Signin from './components/Pages/Signin';
import Signup from './components/Pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {


  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FocusFlowLanding />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
      
    
  );
}

export default App
