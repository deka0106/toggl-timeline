import React, { FC } from 'react'
import styles from './LoginModal.module.scss'
import { LoginForm } from './LoginForm'

export const LoginModal: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>toggl タイムライン</div>
      <LoginForm />
    </div>
  )
}
