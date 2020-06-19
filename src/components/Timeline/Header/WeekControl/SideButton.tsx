import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SideButton.module.scss'

export const SideButton: FC<{
  onClick: () => void
  right?: boolean
}> = ({ onClick, right }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <FontAwesomeIcon icon={right ? 'chevron-right' : 'chevron-left'} />
    </div>
  )
}
