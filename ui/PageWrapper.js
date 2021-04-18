import { styled } from '~/stitches.config'

const PageWrapper = styled('section', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundImage: 'url(/bg.png)',
  backgroundSize: 'cover',
  // global styles
  '*': { maxWidth: '100%' },
  "input[type='tel'],input[type='text'],textarea": { fontSize: '1.2rem' },
  button: { backgroundColor: '$primary', borderColor: '$primary' },
  "input[type='text']:focus,input[type='tel']:focus,textarea:focus": {
    borderColor: '$primary',
  },
  '.react-phone-number-input__country--native': { maxHeight: '37px' },
  '.react-phone-number-input__icon:not(.react-phone-number-input__icon--international)': {
    border: 'none',
    alignItems: 'center',
    display: 'flex',
  },
  blockquote: { borderColor: '$primary' },
})

export default PageWrapper
