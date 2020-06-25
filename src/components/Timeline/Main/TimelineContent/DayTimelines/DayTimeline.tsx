import React, { FC, useState, useEffect } from 'react'
import styles from './DayTimeline.module.scss'
import { getDaysAgo } from 'utils/date'
import { TimeEntry } from 'toggl'
import { apis } from 'api'
import { TimeEntryItem } from './TimeEntryItem'

export const DayTimeline: FC<{
  date: Date
}> = ({ date }) => {
  const [entries, setEntries] = useState<TimeEntry[]>([])

  useEffect(() => {
    const asyncData = async () => {
      setEntries(
        await apis.getTimeEntries({
          start_date: date,
          end_date: getDaysAgo(date, 1),
        })
      )
    }
    asyncData()
  }, [date])

  return (
    <div className={styles.container}>
      {entries.map((entry) => (
        <TimeEntryItem date={date} entry={entry} key={entry.id} />
      ))}
    </div>
  )
}
