import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { authenticate } from '.'

export const Auth: FC<{
  login: string
}> = (props) => {
  if (authenticate()) {
    return <>{props.children}</>
  } else {
    return <Redirect to={props.login} />
  }
}
