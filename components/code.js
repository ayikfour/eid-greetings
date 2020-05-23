import Highlight, { defaultProps } from 'prism-react-renderer';
import { useRef, createRef } from 'react';

export default ({ children, className }) => {
   const language = className.replace(/language-/, '');

   const preEl = createRef();

   const handleClick = async (e) => {
      console.log(preEl);
      const text = preEl.current?.innerText;
      await navigator.clipboard.writeText(text);
      console.log('copied');
   };

   return (
      <Highlight
         {...defaultProps}
         theme={undefined}
         code={children}
         language={language}
      >
         {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
               ref={preEl}
               onClick={handleClick}
               className={className}
               style={{ padding: '1em' }}
            >
               <code>
                  {tokens.map((line, i) => (
                     <div key={i} {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                           <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                     </div>
                  ))}
               </code>
            </pre>
         )}
      </Highlight>
   );
};
