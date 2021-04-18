import { styled } from '~/stitches.config'

export const HeaderWrapper = styled('header', {
  padding: '5px',
  textAlign: 'center',
  color: '#fff',
  marginBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  h1: { fontWeight: 500, letterSpacing: '1px', margin: '0' },
  svg: { fill: '#fff', width: '60px', marginRight: '10px' },
})
