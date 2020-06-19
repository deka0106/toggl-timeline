import React, { FC } from 'react'
import styles from './DisplayMonth.module.scss'
import { useStore } from 'store'

export const DisplayMonth: FC = () => {
  const { week } = useStore()
  return (
    <div className={styles.container}>
      <span className={styles.year}>{week.getFullYear()}</span>年
      <span className={styles.month}>{week.getMonth() + 1}</span>月
    </div>
  )
}
