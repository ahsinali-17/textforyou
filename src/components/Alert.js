import React from 'react'

function Alert(props) {
  return (
    <>
     <div className={`alert alert-${props.alertTxt.type} alert-dismissible fade show role=alert`} style={{height:'50px'}}>
     {props.alertTxt.type}   {props.alertTxt.msg}
     </div>
    </>
  )
}

export default Alert
