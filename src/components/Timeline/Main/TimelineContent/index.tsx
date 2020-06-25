import React, { FC } from 'react'
import styles from './index.module.scss'
import { WeekLines } from './WeekLines'
import { HourLines } from './HourLines'
import { useStore } from 'store'
import { DayTimelines } from './DayTimelines'

export const TimelineContent: FC = () => {
  const { height } = useStore()
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
        <DayTimelines />
      </div>
    </div>
  )
}
