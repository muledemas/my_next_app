import { useRouter } from 'next/router';

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Project Details</h1>
      <p>Project ID: {id}</p>
      <p>Description: Description of Project {id}</p>
    </div>
  );
};

export default ProjectDetail;
