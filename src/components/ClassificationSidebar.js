import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const ClassificationSidebar = (props) => {

  const { projectId } = props;

  return (
    <div className="sidebar">
      <Nav className="flex-column overflow-hidden">
        <div className="d-flex p-2 mb-2 border-bottom border-3 overflow-hidden">
          <Link to="/classification" role="button" className="h-25 my-auto me-3"><FontAwesomeIcon icon={faArrowLeft} size="xl" /></Link>
          <h3 className="m-0 px-0 fs-3 text-start w-100 text-nowrap">{projectId}</h3>
        </div>
        <Nav.Item className="active">
          <Link to={`/classification/${projectId}/classify`} type="button" className="btn btn-secondary w-100 text-start my-1 fs-5 rounded-0">Classify</Link>
        </Nav.Item>

        <Nav.Item>
          <Link to={`/classification/${projectId}/classes`} type="button" className="btn btn-secondary w-100 text-start my-1 fs-5 rounded-0">Classes</Link>
        </Nav.Item>

        <Nav.Item>
            <Link to={`/classification/${projectId}/data-files`} type="button" className="btn btn-secondary w-100 text-start my-1 fs-5 rounded-0">Data Files</Link>
        </Nav.Item>

        <Nav.Item>
          <Link to={`/classification/${projectId}/data-sets`} type="button" className="btn btn-secondary w-100 text-start my-1 fs-5 rounded-0">Data Sets</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default ClassificationSidebar;