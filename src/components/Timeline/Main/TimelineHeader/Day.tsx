import React, { FC } from 'react'
import styles from './Day.module.scss'
import classNames from 'classnames'
import { getDay, isSameDate } from 'utils/date'

const today = new Date()

export const Day: FC<{
  date: Date
}> = ({ date }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.today]: isSameDate(date, today),
      })}
    >
      <div className={styles.day}>{getDay(date)}</div>
      <div className={styles.date}>{date.getDate()}</div>
    </div>
  )
}
