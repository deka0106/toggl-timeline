import React, { FC, useEffect, useState } from 'react'
import { range } from 'lodash-es'
import styles from './index.module.scss'
import { DayTimeline } from './DayTimeline'
import { useStore } from 'store'
import { getDaysAgo } from 'utils/date'
import { TimeEntry } from 'toggl'

export const DayTimelines: FC<{
  entries: TimeEntry[]
}> = ({ entries }) => {
  const { week } = useStore()
  const [days, setDays] = useState<Date[]>([])

  useEffect(() => {
    setDays(range(7).map((i) => getDaysAgo(week, i)))
  }, [week])

  return (
    <div className={styles.container}>
      {days.map((day) => (
        <div className={styles.day} key={day.getTime()}>
          <DayTimeline
            date={day}
            entries={entries.filter(
              (entry) =>
                new Date(entry.start).getDate() === day.getDate() ||
                new Date(entry.stop).getDate() === day.getDate()
            )}
          />
        </div>
      ))}
    </div>
  )
}
