import React, { FC } from 'react'
import styles from './InputTokenModal.module.scss'
import { InputTokenForm } from './InputTokenForm'

export const InputTokenModal: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>toggl タイムライン</div>
      <InputTokenForm />
    </div>
  )
}
