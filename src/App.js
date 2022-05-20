import './App.css';
import All_Projects from './components/All_Projects';
import Final from './components/Home_Pages/Final';
import All_Interests from './components/Interest_Pages/All_Interests';
import Home from './components/Home';

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
          <Route path='/all_projects' element={<All_Projects/>} />
          <Route path='/all_interests' element={<All_Interests/>} />
          <Route path='/Final' element={<Final/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
