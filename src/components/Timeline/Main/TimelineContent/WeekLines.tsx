import React, { FC } from 'react'
import { range } from 'lodash-es'
import styles from './WeekLines.module.scss'

export const WeekLines: FC = () => {
  return (
    <div className={styles.container}>
      {range(7).map((i) => {
        return <div className={styles.day} key={i}></div>
      })}
    </div>
  )
}
