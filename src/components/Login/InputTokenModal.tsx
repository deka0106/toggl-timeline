import React from 'react'
import styles from './InputTokenModal.module.scss'
import { InputTokenForm } from './InputTokenForm'

export class InputTokenModal extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>API Token入力</div>
        <InputTokenForm />
      </div>
    )
  }
}
