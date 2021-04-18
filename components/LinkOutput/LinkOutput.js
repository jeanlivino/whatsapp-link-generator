import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PropTypes from 'prop-types'

import { Wrapper } from './style'

function LinkOutput({ link, onCopy, isCopied }) {
  return (
    <Wrapper>
      <h3>your link</h3>
      <div className="row">
        <input readOnly className="column column-75" type="text" name="link" value={link} />
        <CopyToClipboard text={link} onCopy={onCopy}>
          <button type="submit" className="column column-25">
            Copy to Clipboard
          </button>
        </CopyToClipboard>
      </div>
      {isCopied && (
        <blockquote>
          <p>
            <em>Done!.</em>
          </p>
        </blockquote>
      )}
    </Wrapper>
  )
}

LinkOutput.defaultProps = {
  isCopied: false,
  link: '',
}

LinkOutput.propTypes = {
  onCopy: PropTypes.func.isRequired,
  isCopied: PropTypes.bool,
  link: PropTypes.string,
}

export default LinkOutput
