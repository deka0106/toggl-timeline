import React, { FC } from 'react'
import styles from './SubmitButton.module.scss'

export const SubmitButton: FC = () => {
  return (
    <button type="submit" className={styles.button}>
      ログイン
    </button>
  )
}
