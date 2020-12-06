import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* <NavBar />
        <Main />
        <Footer /> */}
        <p> test</p>
      </div>
    );
  }
}

const Main = () => (
  <Switch>
    <Route  path="/" component={Home} />
    <Route  path="/Features" component={Features} />
    <Route  path="/About" component={About} />
    <Route  path="/About#ContactUs" component={About} />
  </Switch>
);

export default App;