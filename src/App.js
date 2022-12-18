import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Messages from "./Components/Messsage_Side";
import { useContext } from 'react';
import { Context } from './Components/Context';
import { NavChat } from './Components/Navbar';

function App() {
  let {deyer} = useContext(Context)
  console.log(deyer,'bu appdir')
  return (
    <>
      <Navbar/>
    </>

  )
}

export default App;
