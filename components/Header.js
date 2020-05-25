import Head from 'next/head';

const baseUrl = 'https://arifeka.now.sh';

export default function Header({
   title,
   og = null,
   description = 'Arif Eka',
   children,
   favicon = '🙋‍♂️',
}) {
   const getOg = () => {
      return og ? og : 'https://arifeka.now.sh/images/og/twitter-og.png';
   };

   return (
      <Head>
         {/* Title */}
         <title>{title}</title>
         <meta name='og:title' content={title} />

         {/* Description */}
         <meta name='description' content={description} />
         <meta name='og:description' content={description} />
         <meta name='twitter:description' content={description} />

         {/* Images */}
         <meta name='twitter:image' content={getOg()} />
         <meta property='og:image' content={getOg()} />

         {/* URL */}
         <meta name='og:url' content='https://arifeka.now.sh' />

         {/* Icons */}
         <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-touch-icon.png'
         />

         <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
         />

         {/* General */}
         <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
         />
         <meta lang='EN' />
         <meta httpEquiv='Content-Language' content='en' />
         <meta name='apple-mobile-web-app-title' content='Ayik Four' />
         <meta name='author' content='Ayik Four' />

         {/* Twitter general */}
         <meta name='twitter:card' content='summary_large_image' />
         <meta name='twitter:site' content='@paswotnya' />
         <meta name='twitter:creator' content='@paswotnya' />
         <meta name='twitter:title' content={title} />
      </Head>
   );
}
