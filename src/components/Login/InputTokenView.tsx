import React from 'react'
import styles from './InputTokenView.module.scss'
import { InputTokenModal } from './InputTokenModal'

export class InputTokenView extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <InputTokenModal />
      </div>
    )
  }
}
