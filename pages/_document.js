import React from 'react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { getCssString } from '~/stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: `body{margin:0}` }} />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
