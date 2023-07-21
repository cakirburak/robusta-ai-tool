import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const ClassificationProjectClassifyComponent = (props) => {

  const [text, setText] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleClassSelect = (className) => {
    setSelectedClass(className);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    console.log(selectedClass);
    // Perform classification logic with 'text' and 'selectedClass'
    // Reset the text and selectedClass state
    setText('');
    setSelectedClass('');
  };

  return (
    <div className="col ps-0 pe-5">
      <div className="text-center h-100">
        <div>
          <h2 className="mb-5 mt-2">Text Classification Tool</h2>
        </div>
        <div className="h-75">
          <form onSubmit={handleSubmit} className="h-100">
            <div className="d-flex h-100">
              <div className="w-50 ms-5">
                <textarea className="w-100 h-100 fs-5" type="text" id="text-input" value={text} onChange={handleTextChange} />
              </div>
              <div className="mt-5 d-flex flex-column w-50 align-items-center mx-auto position-relative">
                <div className="text-start ms-5 fs-5">
                  <label className="my-1 w-100"><input className="mx-1" type="radio" value="Class Reservation Request" checked={selectedClass === 'Class Reservation Request'} onChange={() => handleClassSelect('Class Reservation Request')} />Reservation Request</label>
                  <label className="my-1 w-100"><input className="mx-1" type="radio" value="Class Reservation Cancellation" checked={selectedClass === 'Class Reservation Cancellation'} onChange={() => handleClassSelect('Class Reservation Cancellation')} />Reservation Cancellation</label>
                  <label className="my-1 w-100"><input className="mx-1" type="radio" value="Class Reservation Update" checked={selectedClass === 'Class Reservation Update'} onChange={() => handleClassSelect('Class Reservation Update')} />Reservation Update</label>
                </div>
                <button className="mt-4 btn btn-primary" type="submit">Classify</button>
                <div className="d-flex w-100 mt-3 justify-content-around">
                  <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faArrowLeft} size="xl" /></button>
                  <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faArrowRight} size="xl" /></button>
                </div>
                <button type="button" className="position-absolute bottom-0 end-0 btn btn-success">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClassificationProjectClassifyComponent;