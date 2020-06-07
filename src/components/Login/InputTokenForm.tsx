import React, { FC, useState, FormEvent } from 'react'
import styles from './InputTokenForm.module.scss'

export const InputTokenForm: FC = () => {
  const [token, setToken] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.submit}>
        ログイン
      </button>
    </form>
  )
}
