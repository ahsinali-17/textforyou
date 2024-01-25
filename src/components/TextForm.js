import React, {useState} from 'react'  //{useState} is a hook used to make state variable...

export default function TextForm(props) {
 
  //text = 'AHSIN'; => wrong way to change state - we have to use the declared function(setText)...
  const toUpper= () =>{
    
    setText(text.toUpperCase());
    props.showAlrt("converted to Uppercase","success");
  } 

  const toLower= () =>{
    
    setText(text.toLowerCase());
    props.showAlrt("converted to Lowercase","success");
  }

  const clear= () =>{
    
    setText("");
    props.showAlrt("Textbox cleared","success");
  }
  
  const toAlternate= () =>{
    let str = "";
    for(let i =0 ;i<text.length;i++){
      if(i%2===0)
      str = str.concat(text.charAt(i).toUpperCase());
      else
      str = str.concat(text.charAt(i).toLowerCase());
    }
    setText(str);
    props.showAlrt("converted to Camelcase","success");
  }
  
  const copy = () =>{  
    //let txt = document.getElementById('myText');
    //txt.select();
    navigator.clipboard.writeText(text);  // while using navigator api -- no need to select or deselect text....
    //document.getSelection().removeAllRanges();
    props.showAlrt("Text copied to clipboard","success");
  }

  const change= (event) =>{
    
    setText(event.target.value);
  }

  let [text,setText] = useState("");
  
  const words = () =>{
    let c = 0;
    for(let i=0;i<text.length;i++){
    if((text.charAt(i)===" " && text.charAt(i+1)!==" ") || text.charAt(i)==="\n")
    c++;
    }
    return c;
   }

  return (
    <>
    <div className="container">
  <div className="mb-3">
  <label htmlFor="myText" style={{color: props.mode!=='light'?'white':'black'}} className="form-label my-3" >{props.heading}</label>
  <textarea className="form-control " style={{backgroundColor: props.mode!=='light'?'#343a40':'white',color: props.mode!=='light'?'white':'black'}} onChange={change} value={text} id="myText" rows="8"></textarea>
</div>
 <button disabled ={text.length===0} className="btn btn mx-2 my-1" style={{backgroundColor:  (props.mode!=='light' && props.mode!=='danger')?'red':'blue',color:'white'}} onClick={toUpper}>To UPPERCASE</button>
 <button disabled ={text.length===0} className="btn btn mx-2 my-1" style={{backgroundColor:  (props.mode!=='light' && props.mode!=='danger')?'red':'blue',color:'white'}} onClick={toLower}>To LOWERCASE</button>
 <button disabled ={text.length===0} className="btn btn mx-2 my-1"style={{backgroundColor:  (props.mode!=='light' && props.mode!=='danger')?'red':'blue',color:'white'}} onClick={clear}>CLEAR</button>
 <button disabled ={text.length===0} className="btn btn mx-2 my-1"style={{backgroundColor:  (props.mode!=='light' && props.mode!=='danger')?'red':'blue',color:'white'}} onClick={toAlternate}>To Alternate Case</button>
 <button disabled ={text.length===0} className="btn btn mx-2 my-1"style={{backgroundColor:  (props.mode!=='light' && props.mode!=='danger')?'red':'blue',color:'white'}} onClick={copy}>Copy Text</button>
 </div>
 <div className="container my-3">
  <h1 className='my-2' style={{color:  (props.mode!=='light' && props.mode!=='danger')?'white':'black',textDecoration: (props.mode!=='light' && props.mode!=='danger')?"2px underline #a0283d":"2px underline blue"}}>Text Summary</h1>
  <div style={{color: props.mode!=='light'?'white':'black'}}> {words()} WORDS and {text.length} CHARACTERS <br/>
  {0.008 * words()} MINUTES to read...</div>
  <h2 className='my-3' style={{color:  (props.mode!=='light' && props.mode!=='danger')?'white':'black',textDecoration: (props.mode!=='light' && props.mode!=='danger')?"2px underline #a0283d":"2px underline blue"}}>PREVIEW</h2>
  <p style={{color: props.mode!=='light'?'white':'black'}}>{text.length === 0 ? 'Nothing to preview': text}</p>
 </div>
    </>
  )
}

