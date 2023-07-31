const ClassificationProjectDataFilesComponent = () => {

  const listOfUploadedFiles = [];



  const sayClicked = (e) => {
    e.preventDefault();
    console.log('Upload =>');
  }

  return (
    <div className="col p-0">
      <div className="row h-100">
        <div className="col-5 text-center h-100 border-end">
          <div className="border-bottom">
            <div className="input-group w-75 mx-auto mt-4">
              <input type="file" className="form-control mb-2" id="inputGroupFile02" />
            </div>
            <button className="input-group-text mx-auto mb-4 border-bottom" htmlFor="inputGroupFile02" onClick={sayClicked}>Upload</button>
          </div>
          {listOfUploadedFiles}
        </div>
        <div className="col text-center h-100">
          <h1>File Preview</h1>
        </div>
      </div>
    </div>
  );
}


export default ClassificationProjectDataFilesComponent;