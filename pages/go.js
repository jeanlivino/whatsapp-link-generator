import { useEffect } from 'react'
import uaParser from 'ua-parser-js'

const goPage = ({ url }) => {
  useEffect(() => {
    window.location.href = url
  }, [])

  return ''
}

const addCountryCode = (phone) => {
  if (phone.length === 11 || phone.length === 10) {
    return `55${phone}`
  }
  return phone
}

export async function getServerSideProps({ req, query }) {
  const ua = uaParser(req.headers['user-agent'])
  const { p, m } = query

  const phone = addCountryCode(p)

  const { type = 'desktop' } = ua.device
  const url =
    type === 'desktop'
      ? `https://web.whatsapp.com/send?phone=${phone}&text=${m}`
      : `whatsapp://send?phone=${phone}&text=${m}`

  return {
    props: {
      url,
    },
  }
}
export default goPage
