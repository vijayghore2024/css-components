import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div>
      <h1 className='m-4 text-success'>PROJECT COMPONENT</h1>

      <div className="container d-flex">
        <Project />
        <Project />
        <Project />

      </div>
    </div>
  )
}

export default Projects
