import React, { FC } from 'react'
import styles from './WorkspaceItem.module.scss'
import { Workspace } from 'toggl'
import { ProjectList } from './ProjectList'
import { useStore } from 'store'

export const WorkspaceItem: FC<{
  workspace: Workspace
}> = ({ workspace }) => {
  const { getWorkspaceProjects } = useStore()
  const projects = getWorkspaceProjects(workspace.id)
  return (
    <>
      <div className={styles.name}>{workspace.name}</div>
      {projects && <ProjectList projects={projects} />}
    </>
  )
}
