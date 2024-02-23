import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.shwalert("Converted to Uppercase", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.shwalert("Converted to Lowercase", "success");

  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.shwalert("Cleared Text ", "success");

  }
  const handleCopy = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.shwalert("Copied Text", "success");

   }
   const handleExtraSpaces = ()=> {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.shwalert("Extra Spaces Removed", "success");

   }
   const handleOnChange = (event)=>{
    setText(event.target.value)
   }
  

  const [text, setText] = useState("Enter the text here");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
     <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#0e152b':'white',
      color:props.mode==='dark'?'white':'black',textShadow:'dark'?'2px 2px 4px yellow': '2px 2px 4px green'}}  id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>


    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}> 
      <h3>Count the Words and Characters</h3>
      <p> {text.split(" ").length} <ins><b>Words</b></ins> {text.length} <ins><b>Characters</b></ins></p>
      <p> {0.008 * text.split(" ").length} <ins><b>Minutes Read</b></ins> </p>
      <h4>Preview</h4>
      <p>{text.length>0?text:'Enter the text above in the textarea to preview it'}</p>
    </div>
    </>
      
  )
}

