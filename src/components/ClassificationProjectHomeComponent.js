const ClassificationProjectHomeComponent = (props) => {
  const { projectId } = props;
  return(
    <div className="col d-flex justify-content-center h-100">
      <h1 className="my-auto pb-5">Project {projectId}</h1>
    </div>
  );
}


export default ClassificationProjectHomeComponent;