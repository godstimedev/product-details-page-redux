import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  colors: {
    blue: {
      900: 'hsl(220, 13%, 13%)',
      700: 'hsl(219, 9%, 45%)',
      500: 'hsl(220, 14%, 75%)',
      300: 'hsl(223, 64%, 98%)',
    },
    white: {
      100: 'hsl(0, 0%, 100%)',
    },
    black: {
      100: 'hsl(0, 0%, 0%)',
    },
    orange: {
      600: 'hsl(26, 100%, 55%)',
      400: 'hsl(25, 100%, 94%)',
    },
  },
  font: {
    body: 'Kumbh Sans',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
});
