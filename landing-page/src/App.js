import React from "react";
import Header from "./components/Header";
import Hero1 from "./components/Hero1";
import Footer from './components/Footer'
import Hero2 from "./components/Hero2";
import Team from "./components/Team";
import Video from "./components/Video";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero1/>
      <Hero2/>
      <Team/>
      <Video/>
      <Footer/>

    </div>
  );
}

export default App;
