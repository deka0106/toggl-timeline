import React, { FC, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { WeekLines } from './WeekLines'
import { HourLines } from './HourLines'
import { useStore } from 'store'
import { DayTimelines } from './DayTimelines'
import { TimeEntry } from 'toggl'
import { apis } from 'api'
import { getDaysAgo } from 'utils/date'

export const TimelineContent: FC = () => {
  const { height, week } = useStore()
  const [entries, setEntries] = useState<TimeEntry[]>([])

  useEffect(() => {
    const asyncData = async () => {
      setEntries([])
      setEntries(
        await apis.getTimeEntries({
          start_date: getDaysAgo(week, -1),
          end_date: getDaysAgo(week, 8),
        })
      )
    }
    asyncData()
  }, [week])

  return (
    <div
      className={styles.container}
      style={{
        height: height * 24,
      }}
    >
      <div className={styles.week}>
        <WeekLines />
      </div>
      <div className={styles.hours}>
        <HourLines />
      </div>
      <div className={styles.entries}>
        <DayTimelines entries={entries} />
      </div>
    </div>
  )
}
