import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';    
import Alert from './components/Alert';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  const [mode,setMode]=useState('light') ;
  const [txt,setTxt]=useState('Enable Dark mode') ;
  const [btxt,setBTxt]=useState('Enable Blue mode') ;
  const [color,setColor]=useState('black');
  const [alert,setAlert]=useState(" ");

  const removeCls = () =>{
    document.body.classList.remove(`bg-warning`)
    document.body.classList.remove(`bg-success`)
    document.body.classList.remove(`bg-danger`)
    document.body.classList.remove(`bg-light`)
  }
  const toggle = (cls)=>{
    removeCls();
    if(cls!==null){
    document.body.classList.add(`bg-${cls}`)
    setMode(cls)
    if(cls === "light")
    setColor("black")
    }
    else{
    if(mode !== 'dark' ){
    setMode('dark');
    setColor('light');
    setTxt('Enable Light mode');
  
    document.body.style.backgroundColor='#343a40';
    document.title='TextForYou - Dark mode';
    showAlert("Darkmode has been enabled","success");
    }
  else{
  setMode('light');
  setColor('dark');
  setTxt('Enable Dark mode');
  document.body.style.backgroundColor='white';
  document.title='TextForYou - Home';
  showAlert("Lightmode has been enabled","success");
  }
}
  }
const btoggle = ()=>{
  removeCls();
  if(mode !== 'primary' ){
  setMode('primary');
  setColor('light');
  setBTxt('Enable Light mode');
  document.body.style.backgroundColor='#0096FF';
  document.title='TextForYou - blue mode';
  showAlert("Bluemode has been enabled","success");
  }
else{
setMode('light');
setColor('dark');
setBTxt('Enable Blue mode');
document.body.style.backgroundColor='white';
document.title='TextForYou - Home';
showAlert("Lightmode has been enabled","success");
}
}

  
  const showAlert = (message , type) =>{
     setAlert({
      msg : message,
      type : type
     });
     setTimeout(() => {
      setAlert({msg:" ",type:" "});
     }, 2000);
  }
 
  return ( 

  <>
  <Router>
<Navbar  mode={mode} toggleMode = {toggle} blueToggle = {btoggle} color={color} text={txt} btext={btxt} />
<Alert alertTxt ={alert}/>

<div className="container">
<Routes>
          <Route exact path="/about" element={ <About mode = {mode}/>}/>    
         <Route exact path="/home" element={< TextForm heading = "Enter Text" mode ={mode} showAlrt = {showAlert}/>}/>
       </Routes>
        </div>
</Router>
</>
  );
}

export default App;
