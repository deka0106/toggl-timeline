import axios from 'axios'
import qs from 'qs'
import { Response, User, TimeEntry, Project, Workspace } from 'toggl'
import { saveApiToken } from 'auth'

const TOGGL_API_BASE_URL = 'https://www.toggl.com/api/v8'

const client = axios.create({
  baseURL: TOGGL_API_BASE_URL,
})

client.interceptors.request.use((config) => {
  config.paramsSerializer = (params) =>
    qs.stringify(params, {
      serializeDate: (date: Date) => date.toISOString(),
    })
  return config
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

export async function getMe() {
  const response = await client.get<Response<User>>('/me')
  return response.data.data
}

export async function getProject(id: number) {
  const response = await client.get<Response<Project>>(`/projects/${id}`)
  return response.data.data
}

export async function getWorkspaces() {
  const response = await client.get<Workspace[]>('/workspaces')
  return response.data
}

export async function getWorkspaceProjects(id: number) {
  const response = await client.get<Project[]>(`/workspaces/${id}/projects`)
  return response.data
}
