import { useEffect } from 'react'
import uaParser from 'ua-parser-js'

const goPage = ({ url }) => {
  useEffect(() => {
    window.location.href = url
  }, [])

  return ''
}

const addCountryCode = phone => {
  if (phone.length === 11 || phone.length === 10) {
    return `55${phone}`
  }
  return phone
}

export async function getServerSideProps({ req, query }) {
  const ua = uaParser(req.headers['user-agent'])
  const { p, m } = query

  const phone = addCountryCode(p)

  const searchParams = new URLSearchParams()
  if (p && p !== '55') {
    searchParams.append('phone', phone)
  }
  searchParams.append('text', m)

  const queryString = searchParams.toString()

  const { type = 'desktop' } = ua.device
  const url =
    type === 'desktop'
      ? `https://web.whatsapp.com/send?${queryString}`
      : `whatsapp://send?${queryString}`

  return {
    props: {
      url,
    },
  }
}
export default goPage
