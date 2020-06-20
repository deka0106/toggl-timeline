import React, { FC } from 'react'
import styles from './index.module.scss'
import { NavHeader } from './NavHeader'
import { NavContent } from './NavContent'

export const Navigation: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavHeader />
      </div>
      <div className={styles.content}>
        <NavContent />
      </div>
    </div>
  )
}
