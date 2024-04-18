import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import About from './components/About';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  let [mode, setmode] = useState('light');
  let [alert, setalert] = useState(null);

  let showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }


  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')
  }
  const togglemode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#13466e';
      showalert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  }
  return (
    <>

      <Router>
        <Navbar title="Textutils" mode={mode} togglemode={togglemode} />

        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <TextForm showalert={showalert} mode={mode} />
            </Route>
          </Switch >

        </div>
      </Router>
    </>
  );
}

export default App;