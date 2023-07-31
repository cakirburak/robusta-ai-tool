import { useParams } from "react-router-dom";
import ClassificationSidebar from "../components/ClassificationSidebar";
import ClassificationProjectHomeComponent from "../components/ClassificationProjectHomeComponent";

export function ClassificationProjectHome() {

  const { projectId } = useParams();

  return (
    <div className="container-lg mt-5 border border-3 border-dark" style={{ height: '685px', width: '1080px', maxWidth:'1080px'}}>
      <div className="row h-100">
        <div className="col-2 border-end border-dark">
          <ClassificationSidebar projectId={projectId} />
        </div>
        <ClassificationProjectHomeComponent projectId={projectId} />
        {/* <ClassificationProjectClassify /> */}
      </div>
    </div>
  );
}