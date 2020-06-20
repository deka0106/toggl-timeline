import React, { FC } from 'react'
import { WorkspaceItem } from './WorkspaceItem'
import { Workspace } from 'toggl'

export const WorkspaceList: FC<{
  workspaces: Workspace[]
}> = ({ workspaces }) => {
  return (
    <>
      {workspaces.map((workspace) => {
        return <WorkspaceItem workspace={workspace} key={workspace.id} />
      })}
    </>
  )
}
