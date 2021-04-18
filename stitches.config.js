import { createCss } from '@stitches/react'

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      primary: '#64b3f4',
    },
  },
  media: {
    mobile: '(max-width: 640px)',
  },
})
