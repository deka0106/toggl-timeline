import React, { FC, useState, FormEvent } from 'react'
import styles from './InputTokenForm.module.scss'
import { apis } from '../../api'
import { useHistory } from 'react-router-dom'

export const InputTokenForm: FC = () => {
  const history = useHistory()
  const [token, setToken] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (await apis.authenticate(token)) {
      history.push('/')
    } else {
      // TODO: error handling
    }
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
