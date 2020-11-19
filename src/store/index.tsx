import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Workspace, Project } from 'toggl'
import { getWeekStart } from 'utils/date'
import { apis } from 'api'
import { StringParam, useQueryParam } from 'use-query-params'

interface Props {
  height: number
  setHeight: (height: number) => void
  week: Date
  setWeek: (week: Date) => void
  workspaces: Workspace[]
  getWorkspaceProjects: (id: number) => Project[] | undefined
  getProject: (id: number) => Project | undefined
  isDisplayProject: (id: number) => boolean
  setDisplayProject: (id: number, value: boolean) => void
}

const Context = createContext<Props>({} as Props)

export const Provider: FC = ({ children }) => {
  const [height, setHeight] = useState<number>(100)
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])

  const [param, setParam] = useQueryParam('week', StringParam)
  const [week, setWeek] = useState<Date>(
    getWeekStart(param ? new Date(param) : new Date())
  )
  useEffect(() => {
    setParam(`${week.getFullYear()}/${week.getMonth() + 1}/${week.getDate()}`)
  }, [setParam, week])

  const [workspaceProjects, setWorkspaceProjects] = useState<{
    [wid: number]: Project[]
  }>({})
  const [projects, setProjects] = useState<{
    [id: number]: Project
  }>({})
  const getWorkspaceProjects = (id: number) => workspaceProjects[id]
  const getProject = (id: number) => projects[id]

  const [displayProjectIds, setDisplayProjectIds] = useState<number[]>([])
  const isDisplayProject = (id: number) => displayProjectIds.includes(id)
  const setDisplayProject = (id: number, value: boolean) => {
    if (value) {
      if (!displayProjectIds.includes(id))
        setDisplayProjectIds((ids) => [...ids, id])
    } else {
      setDisplayProjectIds((ids) => ids.filter((i) => i !== id))
    }
  }

  useEffect(() => {
    const asyncData = async () => {
      const workspaces = await apis.getWorkspaces()
      for (const workspace of workspaces) {
        const projects = await apis.getWorkspaceProjects(workspace.id)
        setWorkspaceProjects((wps) => ({ ...wps, [workspace.id]: projects }))
        projects.forEach((project) => {
          setProjects((ps) => ({ ...ps, [project.id]: project }))
          setDisplayProjectIds((ids) => ids.concat(projects.map((p) => p.id)))
        })
      }
      setWorkspaces(workspaces)
    }

    asyncData()
  }, [])

  return (
    <Context.Provider
      value={{
        height,
        setHeight,
        week,
        setWeek,
        workspaces,
        getWorkspaceProjects,
        getProject,
        isDisplayProject,
        setDisplayProject,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStore = () => useContext(Context)
