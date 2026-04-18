import type { ServerFunctionClient } from 'payload'
import React from 'react'
import '@payloadcms/next/css'
import './custom.scss'

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  try {
    const { handleServerFunctions } = await import('@payloadcms/next/layouts')
    const config = await import('@payload-config')
    const { importMap } = await import('./admin/importMap.js')

    return handleServerFunctions({
      ...args,
      config: config.default,
      importMap,
    })
  } catch (error) {
    console.error('Failed to create Payload server function:', error)
    return null
  }
}

type Args = {
  children: React.ReactNode
}

const Layout = async ({ children }: Args) => {
  try {
    const { RootLayout } = await import('@payloadcms/next/layouts')
    const config = await import('@payload-config')
    const { importMap } = await import('./admin/importMap.js')

    return (
      <RootLayout
        config={config.default}
        importMap={importMap}
        serverFunction={serverFunction}
        htmlProps={{ suppressHydrationWarning: true }}
      >
        {children}
      </RootLayout>
    )
  } catch (error) {
    console.error('Payload layout fallback:', error)
    return <>{children}</>
  }
}

export default Layout
