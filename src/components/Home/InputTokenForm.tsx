import React, { FormEvent } from 'react'
import styles from './InputTokenForm.module.scss'
import { isValidApiToken } from '../../auth'

interface Props {}
interface State {
  token: string
}

export class InputTokenForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      token: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('isValid', await isValidApiToken(this.state.token))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          type="text"
          value={this.state.token}
          onChange={(e) => this.setState({ token: e.target.value })}
          className={styles.input}
        />
        <button type="submit" className={styles.submit}>
          ログイン
        </button>
      </form>
    )
  }
}
