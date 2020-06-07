import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { isAuthenticated } from '.'

export const Auth: FC<{
  login: string
}> = (props) => {
  if (isAuthenticated()) {
    return <>{props.children}</>
  } else {
    return <Redirect to={props.login} />
  }
}
