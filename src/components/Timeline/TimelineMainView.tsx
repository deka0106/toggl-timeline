import React, { FC } from 'react'
import styles from './TimelineMainView.module.scss'
import { Navigation } from './Navigation'
import { Header } from './Header'
import { Main } from './Main'

export const TimelineMainView: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
      </div>
    </div>
  )
}
