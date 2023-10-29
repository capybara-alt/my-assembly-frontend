"use client"
import type { ReactNode, FC } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Error } from './error'

interface Props {
  children: ReactNode
}

export const CustomErrorBoudary: FC<Props> = ({children}) => {
  return (
    <ErrorBoundary
    fallbackRender={(props) => <Error error={props.error} />}
    >
      {children}
    </ErrorBoundary>
  )
}