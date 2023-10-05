import React, { useState } from 'react'

const TextForm = ({ heading, mode, showAlert}) => {
    const [text, setText] = useState("")

const handelUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    showAlert("Converted to uppercase!", "success")
}
const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to lowercase!", "success")
}
const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    showAlert("Text cleared!", "success")
}

const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        showAlert("Copied to clipboard!", "success")
      }

const handleOnChange = (e)=>{
    setText(e.target.value)
}

    return (
        <>
        <div className="container mt-5" style={{color: mode === "dark"? "white": "black"}}>
            <h1>{heading}</h1>
            <div className="mb-3">
                <label htmlFor="textBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: mode === "dark"? "#537188" : "white", color: mode === "dark"? "white": "black" }} id="textBox"  rows="8"></textarea>
            </div>
            <button disabled ={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick = {handelUpClick}>Convet To Uppercase</button>
            <button disabled ={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick = {handleLowClick}>Convet To Lowercase</button>
            <button disabled ={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick = {handleClearClick}>Clear</button>
            <button disabled ={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick = {handleCopy}>Copy</button>
        </div>
        <div className="container my-3" style={{color: mode === "dark"? "white": "black"}}>
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Empty - Nothing to preview!" }</p>
        </div>
        </>
    )
}

export default TextForm
