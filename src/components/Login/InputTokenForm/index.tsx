import React, { FC, useState, FormEvent } from 'react'
import styles from './index.module.scss'
import { apis } from '../../../api'
import { useHistory } from 'react-router-dom'
import { TokenInput } from './TokenInput'
import { SubmitButton } from './SubmitButton'

export const InputTokenForm: FC = () => {
  const history = useHistory()
  const [token, setToken] = useState('')
  const [error, setError] = useState<string>()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (await apis.validateApiToken(token)) {
      history.push('/')
    } else {
      setError('無効なAPIトークンです')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputs}>
        <TokenInput
          value={token}
          onChange={(value) => setToken(value)}
          error={error}
        />
      </div>
      <div className={styles.submit}>
        <SubmitButton />
      </div>
    </form>
  )
}
