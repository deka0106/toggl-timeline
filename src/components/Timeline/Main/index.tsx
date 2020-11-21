import React, { FC, useEffect, useRef } from 'react'
import styles from './index.module.scss'
import { TimelineHeader } from './TimelineHeader'
import { TimelineContent } from './TimelineContent'
import { useStore } from 'store'

export const Main: FC = () => {
  const content = useRef<HTMLDivElement>(null)
  const { height, setHeight } = useStore()

  useEffect(() => {
    const target = content?.current
    if (target) {
      target.onwheel = (e: WheelEvent) => {
        if (e.ctrlKey) {
          setHeight(Math.min(400, Math.max(40, height - e.deltaY / 10)))
          e.preventDefault()
        }
      }
    }
  }, [content, height, setHeight])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TimelineHeader />
      </div>
      <div ref={content} className={styles.content}>
        <TimelineContent />
      </div>
    </div>
  )
}
