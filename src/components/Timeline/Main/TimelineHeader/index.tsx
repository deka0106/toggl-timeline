import React, { FC } from 'react'
import styles from './index.module.scss'
import { Week } from './Week'

export const TimelineHeader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.days}>
        <Week />
      </div>
    </div>
  )
}
