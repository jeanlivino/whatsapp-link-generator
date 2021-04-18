import React from 'react'
import PropTypes from 'prop-types'

import 'milligram/dist/milligram.min.css'
import 'react-phone-number-input/style.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp
