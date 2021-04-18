import { styled } from '~/stitches.config'

const FooterWrapper = styled('footer', {
  a: {
    color: '#fff',
    textAlign: 'center',
    display: 'block',
    padding: '10px',
    '&:hover': { textDecoration: 'underline' },
  },
})

export default FooterWrapper
