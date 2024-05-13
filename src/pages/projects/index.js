import Link from "next/link";

const Projects = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "Description of Project 1" },
    { id: 2, title: "Project 2", description: "Description of Project 2" },
    { id: 3, title: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
             {project.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        Go Back Home
      </Link>
    </div>
  );
};

export default Projects;
