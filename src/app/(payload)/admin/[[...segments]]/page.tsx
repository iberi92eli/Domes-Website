import type { Metadata } from 'next'
import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap.js'

type AdminMetadataArgs = Parameters<typeof generatePageMetadata>[0]
type AdminPageArgs = Parameters<typeof RootPage>[0]

export const generateMetadata = (args: AdminMetadataArgs): Promise<Metadata> =>
  generatePageMetadata({
    config,
    params: args.params,
    searchParams: args.searchParams,
  })

const Page = (args: AdminPageArgs) => {
  return RootPage({
    config,
    importMap,
    params: args.params,
    searchParams: args.searchParams,
  })
}

export default Page
