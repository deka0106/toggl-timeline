import React, { FC } from 'react'
import styles from './index.module.scss'
import { WorkspaceList } from './WorkspaceList'
import { useStore } from 'store'

export const NavContent: FC = () => {
  const { workspaces } = useStore()
  return (
    <>
      <div className={styles.container}>
        <WorkspaceList workspaces={workspaces} />
      </div>
    </>
  )
}
