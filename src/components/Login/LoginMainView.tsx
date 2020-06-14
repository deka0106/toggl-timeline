import React, { FC } from 'react'
import styles from './LoginMainView.module.scss'
import { LoginModal } from './LoginModal'

export const LoginMainView: FC = () => {
  return (
    <div className={styles.container}>
      <LoginModal />
    </div>
  )
}
