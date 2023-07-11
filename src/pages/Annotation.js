import { Link } from "react-router-dom";


export function Annotation(props) {

  return (
    <div className="container-lg mt-5 border border-3 border-dark" style={{ height: '685px' }}>
      <div className="row align-items-start mb-5 border-bottom border-3 border-dark">
        <Link to="/" role="button" className="btn btn-light btn-lg col rounded-0 fs-5">Classification</Link>
        <Link to="/annotation" role="button" className="btn btn-secondary btn-lg col rounded-0 fs-5">Annotation</Link>
      </div>
      <div className="row row-cols-3 justify-content-center">
        <button type="button" className="btn btn-outline-secondary col-3 mx-5 mb-5 py-4 fs-4">Project 2</button>
        <button type="button" className="btn btn-outline-secondary col-3 mx-5 mb-5 py-4 fs-4">Project 1</button>
        <button type="button" className="btn btn-outline-secondary col-3 mx-5 mb-5 py-4 fs-4">Project 3</button>
        <button type="button" className="btn btn-outline-secondary col-3 mx-5 mb-5 py-4 fs-4">Project 4</button>
        <button type="button" className="btn btn-outline-primary col-3 mx-5 mb-5 py-4 fs-4">+ Create New Project</button>
      </div>
    </div>
  )
}