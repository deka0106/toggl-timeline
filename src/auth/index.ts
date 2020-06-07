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

export async function isValidApiToken(token: string) {
  return await apis.authenticate(token)
}

export function isAuthenticated() {
  return getApiToken() !== null
}
