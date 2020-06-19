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

interface Props {
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
  const [week, setWeek] = useState<Date>(getWeekStart(new Date()))
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])

  const [workspaceProjects, setWorkspaceProjects] = useState<{
    [wid: number]: Project[]
  }>({})
  const [projects, setProjects] = useState<{
    [id: number]: Project
  }>({})
  const getWorkspaceProjects = (id: number) => workspaceProjects[id]
  const getProject = (id: number) => projects[id]

  const displayProjectIds = new Set<number>()
  const isDisplayProject = (id: number) => displayProjectIds.has(id)
  const setDisplayProject = (id: number, value: boolean) => {
    if (value) displayProjectIds.add(id)
    else displayProjectIds.delete(id)
  }

  useEffect(() => {
    const asyncData = async () => {
      const ws = await apis.getWorkspaces()
      for (const w of ws) {
        const ps = await apis.getWorkspaceProjects(w.id)
        setWorkspaceProjects({ ...workspaceProjects, [w.id]: ps })
        ps.forEach((p) => setProjects({ ...projects, [p.id]: p }))
      }
      setWorkspaces(ws)
    }

    asyncData()
  }, [])

  return (
    <Context.Provider
      value={{
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
