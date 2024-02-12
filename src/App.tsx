import React from 'react';
import './App.css';

type FooterProp = {
  copyright: string;
}

const Footer: React.FC<FooterProp> = (props) => (
  <footer> amom {props.copyright}</footer>
)

const App = () => (
  <div className="App">
    <h1> sus </h1>
    <Footer copyright='sys'/>
  </div>
)

export default App;