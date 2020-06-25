import React, { FC, useState, useEffect } from 'react'
import styles from './TimeEntryItem.module.scss'
import { TimeEntry } from 'toggl'
import classNames from 'classnames'
import { useStore } from 'store'

export const TimeEntryItem: FC<{
  date: Date
  entry: TimeEntry
}> = ({ date, entry }) => {
  const { getProject, isDisplayProject, height } = useStore()

  const project = getProject(entry.pid)

  const [top, setTop] = useState(0)
  const [h, setH] = useState(0)

  useEffect(() => {
    const start = new Date(entry.start)
    setTop(
      () => (height * (start.getTime() - date.getTime())) / (60 * 60 * 1000)
    )
    setH(() => (height * entry.duration) / (60 * 60))
  }, [date, entry, height])

  return (
    <div
      className={classNames(styles.container, {
        [`background-color-${project?.color}`]: !!project,
      })}
      style={{
        top,
        height: h,
        display: isDisplayProject(entry.pid) ? 'block' : 'none',
      }}
      title={entry.description}
    ></div>
  )
}
