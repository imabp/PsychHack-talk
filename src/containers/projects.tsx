interface ProjectSectionProps {
    projects: ProjectCard[]
}

export type ProjectCard = {
    name: string,
    description: string,
    link: string,
}

const ProjectSection = ({ projects }: ProjectSectionProps) => {
    return <div
        className='h-screen justify-around text-black p-10
bg-gradient-to-b from-white-900  to-gray-100 w-4/5 '
    >
        <div className="text-6xl mx-auto mb-10 font-bold">
            Projects
        </div>
        <div className='grid grid-cols-3 gap-4 '>
            {
                projects.map((project: ProjectCard) => {
                    return <>
                        <div className='border-2 mb-10 p-4  hover:bg-white hover:text-gray-600  border-black rounded-md'>
                            <p className='text-lg p-2 font-bold '>
                                {project.name}
                            </p>
                            <p className='text-md p-2 '>
                                {project.description}
                            </p>
                            <p className='text-sm w-1/5  m-2 rounded-md text-white p-2 font-bold
          bg-gradient-to-r cursor-pointer from-indigo-500 via-purple-500 to-pink-500
          hover:bg-black
          '>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Link</a>
                            </p>
                        </div></>
                })
            }

        </div>
    </div>
}

export default ProjectSection;