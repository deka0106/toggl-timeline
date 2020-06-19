import React, { FC } from 'react'
import { TimelineMainView } from 'components/Timeline/TimelineMainView'
import { Provider } from 'store'

export const Timeline: FC = () => {
  return (
    <Provider>
      <TimelineMainView />
    </Provider>
  )
}
