import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './TokenInput.module.scss'

export const TokenInput: FC<{
  value: string
  onChange: (value: string) => void
  error?: string
}> = (props) => {
  return (
    <div>
      <label>
        <div className={styles.label}>
          <span className={styles.title}>APIトークン</span>
          <span className={styles.description}>
            （
            <a
              href="https://toggl.com/app/profile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              プロフィール
            </a>
            から取得できます）
          </span>
        </div>
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          className={classNames(styles.input, {
            [styles.error]: props.error !== undefined,
          })}
        />
      </label>
      <div className={styles.caption}>{props.error}</div>
    </div>
  )
}
