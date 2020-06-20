import React, { FC, ChangeEvent } from 'react'
import classNames from 'classnames'
import styles from './ProjectItem.module.scss'
import { Project } from 'toggl'
import { useStore } from 'store'

export const ProjectItem: FC<{
  project: Project
}> = ({ project }) => {
  const { isDisplayProject, setDisplayProject } = useStore()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayProject(project.id, e.target.checked)
  }

  return (
    <div className={styles.container}>
      <label className={styles.control}>
        <input
          type="checkbox"
          checked={isDisplayProject(project.id)}
          onChange={onChange}
        />
        <div
          className={classNames(
            styles.checkbox,
            `background-color-${project.color}`,
            `border-color-${project.color}`
          )}
        ></div>
        <div className={styles.label}>{project.name}</div>
      </label>
    </div>
  )
}
