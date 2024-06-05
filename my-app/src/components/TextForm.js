import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //   tolowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //   clear text
  const handleCLRClick = () => {
    let newText = "";
    setText(newText);
  };

  //   handleCopyClick

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // setText(newText);
  };

  //   handleRESClick
  const handleRESClick = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  //   handleShareTextClick

  const handleShareTextClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Text Sharing",
          text: text,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      console.log("Web Share API not supported in this browser.");
    }
  };

  // handleReserveTextClick
  const handleReserveTextClick = () => {
    setText(text.split("").reverse().join(""));
  };

  //   handleSCountWordClick

  const handleSCountWordClick = () => {
    const words = text.trim().split(/\s+/);
    alert(`Word Count: ${words.length}`);
  };

  //   find and repkace
  const handleFindReplace = () => {
    const findText = prompt("Enter the text to find:");
    const replaceText = prompt("Enter the replacement text:");
    if (findText !== null && replaceText !== null) {
      const regex = new RegExp(findText, "g");
      setText(text.replace(regex, replaceText));
    }
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-2 ">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="6"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          {" "}
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          {" "}
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCLRClick}>
          {" "}
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          {" "}
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRESClick}>
          {" "}
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-1" onClick={handleShareTextClick}>
          {" "}
          Share Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleReserveTextClick}
        >
          {" "}
          Reverse Text
        </button>

        <button
          className="btn btn-primary mx-1"
          onClick={handleSCountWordClick}
        >
          {" "}
          Count Word
        </button>
        <button className="btn btn-primary mx-1" onClick={handleFindReplace}>
          {" "}
          Find Replace
        </button>
      </div>
      <div className="constainer my-4 mx-4">
        <h1>Your text summary </h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} take Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
