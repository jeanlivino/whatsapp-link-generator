import { styled } from '~/stitches.config'

export const Wrapper = styled('div', {
  h3: { marginBottom: '0px', fontWeight: 500 },
  '.row': {
    '@mobile': { flexFlow: 'column' },
  },
  '.column': { margin: '5px' },
  blockquote: { borderColor: '$primary' },
})
