import React, { FC } from 'react'
import styles from './index.module.scss'
import { DisplayMonth } from './DisplayMonth'
import { WeekControl } from './WeekControl'

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <DisplayMonth />
      <div className={styles.control}>
        <WeekControl />
      </div>
    </div>
  )
}
