import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function LinkOutput({ link, onCopy, isCopied }) {
  return (
    <section className="your-link">
      <h3>your link</h3>
      <div className="row copy-to">
        <input className="column column-75" type="text" name="link" value={link} />
        <CopyToClipboard text={link} onCopy={onCopy}>
          <button type="submit" className="column column-25">
            Copy to Clipboard
          </button>
        </CopyToClipboard>
      </div>
      {isCopied && (
        <blockquote>
          <p>
            <em>Copiado!.</em>
          </p>
        </blockquote>
      )}
    </section>
  );
}

LinkOutput.defaultProps = {
  isCopied: false,
  link: ''
};

LinkOutput.propTypes = {
  onCopy: PropTypes.func.isRequired,
  isCopied: PropTypes.bool,
  link: PropTypes.string
};

export default LinkOutput;
