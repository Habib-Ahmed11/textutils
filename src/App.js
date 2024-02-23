import './App.css';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light') //wether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showalert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2300);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#0e152b';
      showalert("Dark Mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing.'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now.'
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showalert("Light Mode has been enabled", "success");
      document.title='TextUtils - Light Mode';

    }
  }
  return (
    <>
<Router>
 <NavBar title="TextUtils" myhome="Home nav" ourAbout="About TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/> 
  <div className="container my-3">
    {/* It always a good idea to use exact path because react js use partial patching
    /user --> Component 1
    /user/home --> Component 2  */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm shwalert={showalert} heading="Enter the text to analyze" mode={mode}/>
          </Route>
        </Switch>
        {/* <About/>  */}
   </div> 
 </Router>


    </>
  );
}

export default App;

