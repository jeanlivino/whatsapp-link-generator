import { useEffect } from 'react'
import uaParser from 'ua-parser-js'

const goPage = ({ url }) => {
  useEffect(() => {
    window.location.href = url
  }, [])

  return ''
}

export async function getServerSideProps({ req, query }) {
  const ua = uaParser(req.headers['user-agent'])
  const { p, m } = query

  const { type = 'desktop' } = ua.device
  const url =
    type === 'desktop'
      ? `https://web.whatsapp.com/send?phone=${p}&text=${m}`
      : `whatsapp://send?phone=${p}&text=${m}`

  return {
    props: {
      url,
    },
  }
}
export default goPage
