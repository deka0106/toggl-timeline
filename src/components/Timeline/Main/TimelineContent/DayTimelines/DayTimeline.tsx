import React, { FC } from 'react'
import styles from './DayTimeline.module.scss'
import { TimeEntry } from 'toggl'
import { TimeEntryItem } from './TimeEntryItem'

export const DayTimeline: FC<{
  date: Date
  entries: TimeEntry[]
}> = ({ date, entries }) => {
  return (
    <div className={styles.container}>
      {entries.map((entry) => (
        <TimeEntryItem date={date} entry={entry} key={entry.id} />
      ))}
    </div>
  )
}
