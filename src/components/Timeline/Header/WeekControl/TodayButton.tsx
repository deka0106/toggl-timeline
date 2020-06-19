import React, { FC } from 'react'
import styles from './TodayButton.module.scss'

export const TodayButton: FC<{
  onClick: () => void
}> = ({ onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      今日
    </div>
  )
}
