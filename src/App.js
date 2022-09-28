// import {useState} from 'react'
import Header from './Header'
import Form from "./Form"
import List from "./List"
import About from "./About"
import Map from "./Map"
import {Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
      <Header />
      <main className="main-container">
        <Routes>
          <Route exact path="/" element={<Form />}/>
          <Route path="/list" element={ <List className="list"/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/map" element={<Map />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
