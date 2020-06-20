import React, { FC } from 'react'
import { Project } from 'toggl'
import { ProjectItem } from './ProjectItem'

export const ProjectList: FC<{
  projects: Project[]
}> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return <ProjectItem project={project} key={project.id} />
      })}
    </>
  )
}
