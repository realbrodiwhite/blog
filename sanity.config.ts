import {presentationTool} from '@sanity/presentation'
import {visionTool} from '@sanity/vision'
import {assist} from '@sanity/assist'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {locate} from '~/sanity/presentation/locate'
import {frontendUrl, projectDetails} from '~/sanity/projectDetails'
import schema from '~/sanity/schema'
import {defaultDocumentNode, structure} from '~/sanity/structure'

export const config = defineConfig({
  ...projectDetails(),
  name: 'sanity-remix',
  title: 'Sanity Remix',
  plugins: [
    deskTool({structure, defaultDocumentNode}),
    presentationTool({
      previewUrl: frontendUrl,
      locate,
    }),
    assist(),
    visionTool(),
  ],
  basePath: `/studio`,
  schema: {
    types: schema,
  },
})
assist()
