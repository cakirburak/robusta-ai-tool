import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";


const ClassificationProjectClassComponent = () => {

  const [text, setText] = useState("");
  const [color, setColor] = useState("#aabbcc");
  const [isRGBSelectorVisible, setIsRGBSelectorVisible] = useState(false);
  const [projectClassArray, setProjectClassArray] = useState([]);
  const [projectClassElementArray, setProjectClassElementArray] = useState([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleToggleHexSelector = () => {
    setIsRGBSelectorVisible((isRGBSelectorVisible) => !isRGBSelectorVisible);
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    console.log(color)
    const classInstance = {
      "text": text,
      "color": color,
    }
    const classElement = '<>'
    setProjectClassArray([...projectClassArray, classInstance]);
  }

  const handleClassRemove = (classInstanceText) => {
    const newProjectClassArray = projectClassArray.filter(classInts => classInts.text !== classInstanceText)
    setProjectClassArray(newProjectClassArray);
  }

  return (
    <div className="col px-0">

      <div className="d-flex flex-column align-items-center mt-5">
        <h1 className="mb-5">Define your classes here</h1>
        <div className="d-flex position-relative w-50">
          <div className="position-relative">
            <div className="position-absolute top-100 start-0 " style={{zIndex: 1}}>
              {isRGBSelectorVisible && <HexColorPicker color={color} onChange={handleColorChange} />}
            </div>
            <button type="button" className="btn btn-primary me-1" onClick={handleToggleHexSelector}><FontAwesomeIcon icon={faPalette} /></button>
          </div>
          <form className="d-flex w-100" onSubmit={handleSubmit}>
            <input className="me-3 fs-5 h-100 w-100" type="text" value={text} onChange={handleTextChange} placeholder="Enter your class here" />
            <button type="submit" className="btn btn-secondary "><FontAwesomeIcon icon={faCheck} size="lg" /></button>
          </form>
        </div>
        <ul className="list-group list-group-flush mt-5 w-50 position-relative">
          {projectClassArray.map((classInstance) => (
            <li className="list-group-item justify-content-between d-flex fw-bold" key={classInstance} style={{color: classInstance.color, zIndex: 0}} >{classInstance.text}<span className="btn btn-outline-danger ms-5" onClick={() => handleClassRemove(classInstance.text)}><FontAwesomeIcon icon={faTrash} /></span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default ClassificationProjectClassComponent;