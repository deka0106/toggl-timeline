import React, { FC } from 'react'
import { range } from 'lodash-es'
import styles from './HourLines.module.scss'
import { useStore } from 'store'

export const HourLines: FC = () => {
  const { height } = useStore()
  return (
    <div className={styles.container}>
      <div
        className={styles.hours}
        style={{
          paddingTop: height / 2,
          paddingBottom: height / 2,
        }}
      >
        {range(1, 24).map((i) => {
          return (
            <div className={styles.hour} key={i}>
              <span className={styles.number}>{i}</span>
              <span className={styles.unit}>時</span>
            </div>
          )
        })}
      </div>
      <div className={styles.lines}>
        {range(24).map((i) => {
          return <div className={styles.line} key={i}></div>
        })}
      </div>
    </div>
  )
}
