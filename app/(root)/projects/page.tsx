
import { getAllProjects } from "@/use-cases/projects";
import { Suspense } from "react";
import { Header } from "./components/header";
import { ProjectSkelteon } from "./components/project-skeleton";
import { CreateModal } from "./components/modal/create";
import { EditModal } from "./components/modal/edit";
import { assertAuthenticated } from "@/lib/session";
import { EmptyProject } from "./components/empty-project";
import { DeleteModal } from "./components/modal/delete";
import { ProjectCard } from "./components/project-card";


const ProjectsPage = async () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header title="Your Projects" />
      <Suspense fallback={<ProjectSkelteon />}>
        <Projects />
      </Suspense>
      <CreateModal />
      <EditModal />
      <DeleteModal />
    </div>
  );
};

const Projects = async () => {
  const session = await assertAuthenticated();
  const projects = await getAllProjects(session.id);
  return projects && Array.isArray(projects) && projects.length > 0 ? (
    <div className="p-3 w-full h-full">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {projects.map((data, index) => (
          <ProjectCard key={index} data={data} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-1 justify-center items-center w-full h-full">
      <EmptyProject />
    </div>
  );
};

export default ProjectsPage;
