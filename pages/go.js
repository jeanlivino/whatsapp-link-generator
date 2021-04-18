import React from 'react'
import uaParser from 'ua-parser-js'

import { isDev } from '../utils/is'
import { connectToDatabase } from '../utils/mongodb'

const goPage = props => <div>{JSON.stringify(props)}</div>

export async function getServerSideProps({ req, query }) {
  const ua = uaParser(req.headers['user-agent'])
  const { p, m } = query

  const { type = 'desktop' } = ua.device
  const url =
    type === 'desktop'
      ? `https://web.whatsapp.com/send?phone=${p}&text=${m}`
      : `whatsapp://send?phone=${p}&text=${m}`
  const content = { phone: p, message: m, type }
  if (isDev())
    return {
      props: content,
    }

  const response = {
    props: {},
    redirect: {
      destination: url,
      permanent: false,
    },
  }
  try {
    const { db } = await connectToDatabase()
    await db.collection('clicks').insertOne(content)
    return response
  } catch (e) {
    console.error(e)
    return response
  }
}
export default goPage
