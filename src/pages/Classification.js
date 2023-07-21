import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

export function Classification(props) {

  const initialcreateProjectButton = <button type="button" className="btn btn-outline-primary col-3 mx-5 mb-5 py-4 fs-4" onClick={handleCreateNewProjectClick}>+ Create New Project</button>
  const [createProjectButton, setCreateProjectButton] = useState(initialcreateProjectButton)
  const [classificationProjects, setclassificationProjects] = useState([]);
  const [classificationProjectElements, setclassificationProjectElements] = useState([]);
  var projectName = '';

  function handleCreateNewProjectClick() {
    setCreateProjectButton(
      <Form className="col-3 gap-1 row mx-5 mb-5 py-3 border border-primary rounded" onSubmit={handleCreateProjectSubmit}>
        <Form.Group className="col p-0">
          <Form.Control className="py-1 fs-4 h-100" type="text" aria-describedby="project-name" />
        </Form.Group>
        <button className="btn btn-primary col-2" type="submit">+</button>
      </Form>
    )
  }

  function handleCreateProjectSubmit(e) {
    e.preventDefault();
    projectName = e.target.elements[0].value.toString();
    if(!classificationProjects.includes(projectName)){
      setclassificationProjects([...classificationProjects, projectName])
    }else{
      alert('That name is already taken!')
    }
  }

  function updateListOfProject() {
    for (let i = 0; i < classificationProjects.length; i++) {
      var element = (
        <Link to={`/classification/${classificationProjects[i]}`} key={classificationProjects[i]} type="button" className="btn btn-outline-secondary col-3 mx-5 mb-5 py-4 fs-4">{classificationProjects[i]}</Link>
      );
      setclassificationProjectElements([...classificationProjectElements, element]);
    }
  }

  useEffect(() => {
    updateListOfProject();
    setCreateProjectButton(initialcreateProjectButton);
  }, [classificationProjects]);

  return (
    <div className="container-lg mt-5 w-75 border border-3 border-dark" style={{ height: '685px' }}>
      <div className="row align-items-start mb-5 border-bottom border-3 border-dark">
        <Link to="/" type="button" className="btn btn-secondary btn-lg col rounded-0 fs-5">Classification</Link>
        <Link to="/annotation" type="button" className="btn btn-light btn-lg col rounded-0 fs-5">Annotation</Link>
      </div>
      <div className="row row-cols-3 justify-content-center">
        {classificationProjectElements}
        {createProjectButton}
      </div>
    </div>
  )
}