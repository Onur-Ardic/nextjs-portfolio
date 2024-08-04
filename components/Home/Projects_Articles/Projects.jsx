import React from 'react'
import ProjetcsSlide from './ProjectsSlide'
import { getRepos } from '@/service/api'

const Projects = async () => {
    const projects = await getRepos()


    return (
        <div className="projects">
            <div className="projects-title">
                <h3 className='text-xl my-3 text-center'>Projects</h3>
            </div>

            <div className="projects-slide">
                <ProjetcsSlide projects={projects} />
            </div>
        </div>
    )
}

export default Projects