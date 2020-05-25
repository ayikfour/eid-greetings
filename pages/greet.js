import { Heading, Text, Button, Link } from 'rebass';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../components/Header';
import GreetLayout from '../components/Layout/Greet';
import queryString from 'query-string';
import { toast } from 'react-toastify';

const Greet = () => {
   const [copied, setCopied] = useState(false);

   const router = useRouter();
   const { recipient, sender, character, generated } = router.query;

   const getUrl = () => {
      const windowUrl = window.location.href.split('&');
      windowUrl.pop();
      const newUrl = windowUrl.join('&');
      return newUrl;
   };

   const handleCopy = async () => {
      const url = getUrl();
      await navigator.clipboard.writeText(url);
      setCopied(true);

      toast('Tautan berhasil disalin!', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   return (
      <>
         <Header
            description={`New message from ${sender}`}
            title={`Hai ${recipient}`}
         ></Header>
         <GreetLayout illustration={character}>
            <Heading as='h1' py={5}>{`Halo ${recipient}!`}</Heading>
            <Text as='p' mb={4}>
               Apa kabar? Mungkin suasana lebaran kali ini sedikit berbeda
               dengan tahun-tahun sebelumnya, aku harap kamu ✨baik-baik saja
               dan sehat selalu✨.
            </Text>
            <Text as='p' mb={4}>
               aku mohon maaf ya jika selama ini pernah berbuat salah. Baik
               salah yang aku sengaja maupun tidak 🙏🏻
            </Text>
            <Text as='p' mb={4}>
               Meskipun belum bisa bertemu karena kondisi ini, aku harap kita
               tetap dapat tetap berkomunikasi.
            </Text>
            <Text as='p' mb={4}>
               Dan tidak lupa, <b>selamat Hari Raya Idul Fitri 1441 H</b> 🕌
            </Text>
            <Text as='p' mb={4}>
               Salam hangat di hari yang fitri ini, <b>{sender}</b>.
            </Text>
            {generated ? (
               <>
                  <Button mb={3} onClick={handleCopy}>
                     {!copied ? 'Salin tautan' : 'Telah disalin!'}
                  </Button>
                  <Link
                     className='twitter-share-button'
                     href={`https://twitter.com/intent/tweet?url=${getUrl()}`}
                     data-size='large'
                  >
                     <Button width={1} variant='secondary'>
                        Tweet sekarang
                     </Button>
                  </Link>
               </>
            ) : null}
         </GreetLayout>
      </>
   );
};

export default Greet;
