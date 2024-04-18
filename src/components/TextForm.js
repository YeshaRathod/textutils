import React, { useState } from "react";

export default function TextForm(props) {
  const totalwords = (text) => {
    let count = 0;
    let str = text.split(" ")
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') { count++; }
      else { };
    }
    return count;
  }

  const handleupclick = () => {
    //console.log("uppercase button was clicked");
    let newtextup = text.toUpperCase();
    setText(newtextup);
    props.showalert("Coverted to Uppercase", "success");
  };

  const handleloclick = () => {
    let newtextlow = text.toLowerCase();
    setText(newtextlow);
    props.showalert("Convert to Lowercase successfully", "success")
  };
  const handleOnchange = (event) => {
    //console.log("onchange");
    setText(event.target.value);

  };

  const handlecleartext = () => {
    setText("");
    props.showalert("Clear Text successfully", "success")
  };

  const handleextraspace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'dark' }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Enter The Text Below</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleupclick} >
          Convert To UpperCase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert To Lowercase
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleextraspace}>
          Remove Extra Space
        </button>

        <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handlecleartext}>
          Clear Text
        </button>
      </div >

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p>
          {totalwords(text)} Words & {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} reading Time</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview!"}</p>
      </div >
    </>
  );
}
