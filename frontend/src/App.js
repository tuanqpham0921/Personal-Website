import './App.css';
import More_Projects from './components/More_Projects';
import More_Interests from './components/Interest_Pages/More_Interests';
import Home from './components/Home';
import Fader from './components/Fader';
import VietDia from './components/Project_Pages/VietDia';
import Pseudo2Cpp from './components/Project_Pages/Pseudo2Cpp';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn(), MoveOut(0, -1000));
const FadeUp = batch(Fade(), Move(), Sticky(), MoveOut(0, -1000));



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path='/more_projects' element={<More_Projects/>} />
          <Route path='/viet' element={<VietDia />} />
          <Route path='/pseudo2cpp' element={<Pseudo2Cpp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
