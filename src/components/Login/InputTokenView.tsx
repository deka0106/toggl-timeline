import React, { FC } from 'react'
import styles from './InputTokenView.module.scss'
import { InputTokenModal } from './InputTokenModal'

export const InputTokenView: FC = () => {
  return (
    <div className={styles.container}>
      <InputTokenModal />
    </div>
  )
}
