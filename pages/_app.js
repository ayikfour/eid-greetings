import '../styles/syntax-zeit.css';
import '../styles/global.css';

import { ThemeProvider, Heading, Text } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import theme from '../theme';
import Code from '../components/code';

const components = {
   code: Code,
   p: Text,
};

export default function App({ Component, pageProps }) {
   return (
      <ThemeProvider theme={theme}>
         <MDXProvider components={components}>
            <Component {...pageProps} />
         </MDXProvider>
      </ThemeProvider>
   );
}
