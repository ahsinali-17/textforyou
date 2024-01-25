import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) { //props are basically properties of component passed as arguments. props can be of anytype...
 
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color: (props.mode!=='light' && props.mode!=='danger')?'#a0283d':'#2763b9'}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={{color: props.mode!=='light'?'white':'gray'}} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: props.mode!=='light'?'white':'gray'}} to="/about">{props.about}</Link>
        </li>
        
      </ul>
       <div className='d-flex'>
          <div className='bg-warning mx-2' style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode("warning")}}></div>
          <div className='bg-danger mx-2' style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode("danger")}}></div>
          <div className='bg-success mx-2' style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode("success")}}></div>
          <div className='bg-light mx-2' style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={()=>{props.toggleMode("light")}}></div>
        </div>
      <div className="form-check form-switch " >
      <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault">{props.btext}</label>
  <input className="form-check-input mx-2" type="checkbox" onClick={()=>{props.blueToggle(null)}}  role="switch" id="flexSwitchCheckDefault"/>
</div>
      <div className="form-check form-switch ">
      <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault">{props.text}</label>
  <input className="form-check-input mx-2" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
</div>
      <form className="d-flex"  role="search">
        <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    

    </div>
  </div>
</nav>
    </>
  )
}

 


Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string
}

Navbar.defaultProps={
  title: "textforYOU",
  about: "ABOUT"
}

