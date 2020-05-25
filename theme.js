const theme = {
   breakpoints: ['640px', '768px', '1024px', '1280px'],
   space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
   fonts: {
      body:
         'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
   },
   fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
   forms: {
      label: {
         color: 'text',
         fontSize: 1,
         fontWeight: 'bold',
         mb: 2,
      },
      input: {
         borderColor: 'primary',
         '&:focus': {
            borderColor: 'primary',
            boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
            outline: 'none',
         },
      },
      select: {
         borderColor: 'gray',
         '&:focus': {
            borderColor: 'primary',
            boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
            outline: 'none',
         },
      },
      textarea: {
         borderColor: 'gray',
         '&:focus': {
            borderColor: 'primary',
            boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
            outline: 'none',
         },
      },
   },
   fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
   },
   lineHeights: {
      body: 1.5,
      heading: 1.125,
   },
   colors: {
      text: '#000',
      background: '#fff',
      coral: '#fffaf2',
      primary: '#000',
      secondary: '#fff',
      twitter: '#00acee',
      muted: '#f6f6f6',
   },
   variants: {
      nav: {
         fontSize: 1,
         fontWeight: 'bold',
         display: 'inline-block',
         p: 2,
         color: 'primary',
         textDecoration: 'none',
         ':hover,:focus,.active': {
            color: 'primary',
         },
      },
   },
   buttons: {
      primary: {
         fontSize: 1,
         fontWeight: 'bold',
         color: 'background',
         bg: 'primary',
      },
      secondary: {
         fontSize: 1,
         fontWeight: 'bold',
         bg: 'secondary',
         color: 'primary',
         cursor: 'pointer',
      },
      outline: {
         fontSize: 1,
         fontWeight: 'bold',
         bg: 'transparent',
         color: 'primary',
         border: '2px solid',
      },
   },
   styles: {
      root: {
         fontFamily: 'body',
         lineHeight: 'body',
         fontWeight: 'body',
         hyphens: 'auto',
      },
      h1: {
         color: 'text',
         fontFamily: 'heading',
         lineHeight: 'heading',
         fontWeight: 'heading',
         fontSize: [5, 5, 7, 7],
      },
      h2: {
         color: 'text',
         fontFamily: 'heading',
         lineHeight: 'heading',
         fontWeight: 'heading',
         fontSize: 4,
      },
      h3: {
         color: 'text',
         fontFamily: 'heading',
         lineHeight: 'heading',
         fontWeight: 'heading',
         fontSize: 3,
      },
      h4: {
         color: 'text',
         fontFamily: 'heading',
         lineHeight: 'heading',
         fontWeight: 'heading',
         fontSize: 2,
      },
      h5: {
         color: 'text',
         fontFamily: 'heading',
         lineHeight: 'heading',
         fontWeight: 'heading',
         fontSize: 1,
      },
      h6: {
         color: 'text',
         fontFamily: 'heading',
         lineHeight: 'heading',
         fontWeight: 'heading',
         fontSize: 0,
      },
      p: {
         color: 'text',
         fontFamily: 'body',
         fontWeight: 'body',
         lineHeight: 'body',
      },
      a: {
         color: 'primary',
      },
      pre: {
         fontFamily: 'monospace',
         overflowX: 'auto',
         code: {
            color: 'inherit',
         },
         cursor: 'pointer',
         ':hover': {
            bg: 'muted',
         },
      },
      code: {
         fontFamily: 'monospace',
         fontSize: 'inherit',
      },
      table: {
         width: '100%',
         borderCollapse: 'separate',
         borderSpacing: 0,
      },
      th: {
         textAlign: 'left',
         borderBottomStyle: 'solid',
      },
      td: {
         textAlign: 'left',
         borderBottomStyle: 'solid',
      },
      img: {
         maxWidth: '100%',
      },
   },
};

export default theme;
