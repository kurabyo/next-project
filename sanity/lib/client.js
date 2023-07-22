import {createClient} from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion: '2023-07-22',
  dataset: "production",
  projectId: "cbukclud",
  useCdn: true,
})
