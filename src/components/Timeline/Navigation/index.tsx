import React, { FC } from 'react'
import styles from './index.module.scss'
import { NavHeader } from './NavHeader'

export const Navigation: FC = () => {
  return (
    <div className={styles.container}>
      <NavHeader />
    </div>
  )
}
