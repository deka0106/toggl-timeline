import React, { FC, useState, useEffect } from 'react'
import styles from './TimelineMainView.module.scss'
import { TimeEntry } from 'toggl'
import { apis } from 'api'

export const TimelineMainView: FC = () => {
  const [entries, setEntries] = useState<TimeEntry[]>([])

  const fetchEntries = async () => {
    setEntries(await apis.getTimeEntries())
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  return <div>{JSON.stringify(entries)}</div>
}
