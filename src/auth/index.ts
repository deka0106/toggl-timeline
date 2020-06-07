import { apis } from '../api'

const KEY = 'toggl_api_token'

export function saveApiToken(token: string) {
  localStorage.setItem(KEY, token)
}

export function getApiToken() {
  return localStorage.getItem(KEY)
}

export function clearApiToken() {
  localStorage.removeItem(KEY)
}

export function authenticate() {
  const token = getApiToken()
  if (token !== null) {
    apis.setApiToken(token)
    return true
  } else {
    return false
  }
}
