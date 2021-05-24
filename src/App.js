import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Gyms from './components/Gyms';
import Header from './components/Header';
import Questions from './components/Questions';
import Rate from './components/Rate';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';

function App() {
  const [current, setCurrent] = useState(0);
  const [title, setTitle] = useState("залы");
  const [clicked, setClicked] = useState(false)
  return (
    <div className="App">
      <Header/>
      <Slider current={current} setCurrent={setCurrent} slides={SliderData} title={title} setTitle={setTitle}/>
      <Rate/>
      <Gyms/>
      <Questions clicked={clicked} setClicked={setClicked}/>
      <Footer/>
    </div>
  );
}

export default App;
