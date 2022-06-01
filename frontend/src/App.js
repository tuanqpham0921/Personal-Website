import './App.css';
import More_Projects from './components/More_Projects';
import Home from './components/Home';
import VietDia from './components/Project_Pages/VietDia';
import Pseudo2Cpp from './components/Project_Pages/Pseudo2Cpp';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path='/more_projects' element={<More_Projects/>} />
          <Route path='/viet' element={<VietDia />} />
          <Route path='/pseudo2cpp' element={<Pseudo2Cpp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
