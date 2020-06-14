import React, { FC, useState, useEffect } from 'react'
import styles from './TimelineMainView.module.scss'
import { TimeEntry } from 'toggl'
import { apis } from 'api'
import { Navigation } from './Navigation'
import { Header } from './Header'
import { Main } from './Main'

export const TimelineMainView: FC = () => {
  const [entries, setEntries] = useState<TimeEntry[]>([])

  const fetchEntries = async () => {
    setEntries(await apis.getTimeEntries())
  }

  useEffect(() => {
    fetchEntries()
  }, [])

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
