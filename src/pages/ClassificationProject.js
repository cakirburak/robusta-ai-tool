import { useParams } from "react-router-dom";

export function ClassificationProject() {

  const { projectId } = useParams();

  return (
    <div className="project-details">
      <h2>Project Details of {projectId}</h2>
    </div>
  );
}