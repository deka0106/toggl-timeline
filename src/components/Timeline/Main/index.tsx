import React, { FC } from 'react'
import styles from './index.module.scss'
import { TimelineHeader } from './TimelineHeader'
import { TimelineContent } from './TimelineContent'

export const Main: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TimelineHeader />
      </div>
      <div className={styles.content}>
        <TimelineContent />
      </div>
    </div>
  )
}
