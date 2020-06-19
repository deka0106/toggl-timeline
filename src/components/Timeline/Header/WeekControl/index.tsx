import React, { FC } from 'react'
import styles from './index.module.scss'
import { SideButton } from './SideButton'
import { TodayButton } from './TodayButton'
import { useStore } from 'store'
import { getPrevWeek, getNextWeek, getWeekStart } from 'utils/date'

export const WeekControl: FC = () => {
  const { week, setWeek } = useStore()

  const setPrevWeek = () => setWeek(getPrevWeek(week))
  const setThisWeek = () => setWeek(getWeekStart(new Date()))
  const setNextWeek = () => setWeek(getNextWeek(week))

  return (
    <div className={styles.container}>
      <SideButton onClick={setPrevWeek} />
      <div className={styles.today}>
        <TodayButton onClick={setThisWeek} />
      </div>
      <SideButton onClick={setNextWeek} right={true} />
    </div>
  )
}
