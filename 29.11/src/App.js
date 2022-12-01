import React from 'react';
import Header from "./Header";
import MainBlock from "./Main-block";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header/>
      <div className="wrapper">
          <MainBlock/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
