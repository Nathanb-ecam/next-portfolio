import Image from 'next/image';
import React from 'react'
import { FaGithub } from 'react-icons/fa';


export enum ProjectTypes {
    WEB = 'Web Development',
    MOBILE = 'Mobile dev',
    CLOUD_AND_INFRA = "Cloud & infrastructure",
    IOT = 'IOT',
  }

export type Project = {
    title: string;
    imagePath:string;
    description: string;
    technologies: string[];
    githubLink?: string;
    categories: ProjectTypes[];
}

interface Props{    
    project: Project;
}

const ProjectCard = ({project} : Props) => {    
    return (
    
    <div className='min-w-[300px] max-w-[400px] mb-6'>    
    {/* <div className="min-w-[340px] max-w-[340px] mb-6"> */}
        <div className="relative w-full h-[220px]">
            <Image 
                src={project.imagePath}
                alt={`image-${project.title}`}
                fill
                className="object-contain rounded-lg"
            />
        </div>
        <div className='flex justify-between items-center'>
            <h2 className='text-semibold text-white-text mt-3'>{project.title}</h2>
            {project?.githubLink && <FaGithub className='text-primary' onClick={()=>window.location.href=project.githubLink ?? ""}/>}
        </div>
        <p className='text-grey-text text-sm'>{project.description}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
            {project.technologies.map((techName, index)=>(
                <p key={index} className='text-xs py-0.5 px-3 border border-ligthwhite rounded-sm text-white-text bg-grey-bg'>{techName}</p>
            ))}
        </div>


    </div>
    
  )
}

export default ProjectCard