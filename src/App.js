import axios from 'axios';
import { useState } from 'react';
import './App.css';
import NextButton from './components/next-button';
import PreviousButton from './components/previous-button';
import StarShipCard from './components/star-ship-card';

function App() {
 
  const [pageNum, setPageNum] = useState(1)

  

  return (
    <div className="App">
      <h1 id='page-title'>
        STAR WARS STARSHIPS
      </h1>
      <StarShipCard pageNum = {pageNum}/>
      <div id='button-container'>
        <PreviousButton pageNum = {pageNum} setPageNum = {setPageNum}/>
        <NextButton pageNum = {pageNum} setPageNum = {setPageNum}/>
      </div>
      <div id='pageNumDiv'>Page: {pageNum}/4</div>
    </div>
  );
}

export default App;
