import React, { FC, useEffect, useState } from 'react'
import { range } from 'lodash-es'
import styles from './Week.module.scss'
import { Day } from './Day'
import { useStore } from 'store'
import { getDaysAgo } from 'utils/date'

export const Week: FC = () => {
  const { week } = useStore()
  const [days, setDays] = useState<Date[]>([])

  useEffect(() => {
    setDays(range(7).map((i) => getDaysAgo(week, i)))
  }, [week])

  return (
    <div className={styles.container}>
      {days.map((day) => {
        return (
          <div className={styles.day}>
            <Day date={day} />
          </div>
        )
      })}
    </div>
  )
}
