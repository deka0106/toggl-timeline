import axios from 'axios'
import { Response, User, TimeEntry } from 'toggl'
import { saveApiToken } from '../auth'

const client = axios.create({
  baseURL: 'https://www.toggl.com/api/v8',
})

export async function authenticate(token: string) {
  try {
    const response = await client.get<Response<User>>('/me', {
      auth: {
        username: token,
        password: 'api_token',
      },
    })
    if (response.status === 200) {
      saveApiToken(token)
      client.defaults.auth = {
        username: token,
        password: 'api_token',
      }
      return true
    } else {
      return false
    }
  } catch {
    return false
  }
}

export async function getTimeEntries(
  params: {
    start_date?: Date
    end_date?: Date
  } = {}
) {
  const response = await client.get<TimeEntry[]>('/time_entries', {
    params,
  })
  return response.data
}
