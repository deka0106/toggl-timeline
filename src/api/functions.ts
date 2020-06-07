import axios from 'axios'
import { Response, User, TimeEntry } from 'toggl'
import { saveApiToken } from '../auth'

const TOGGL_API_BASE_URL = 'https://www.toggl.com/api/v8'

const client = axios.create({
  baseURL: TOGGL_API_BASE_URL,
})

export function setApiToken(token: string) {
  client.defaults.auth = {
    username: token,
    password: 'api_token',
  }
}

export async function validateApiToken(token: string) {
  try {
    const response = await axios.get<Response<User>>(
      `${TOGGL_API_BASE_URL}/me`,
      {
        auth: {
          username: token,
          password: 'api_token',
        },
      }
    )
    if (response.status === 200) {
      saveApiToken(token)
      setApiToken(token)
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
