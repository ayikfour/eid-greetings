import { Flex } from 'rebass';
import { Heading, Text } from 'theme-ui';
import { useRouter } from 'next/router';
import atob from 'atob';
import Header from '../../components/Header';

const Greet = () => {
   const router = useRouter();
   const greet = router.query?.greet;
   const recipient = greet ? atob(greet) : '';

   return (
      <>
         <Header
            description='New message from: Ayik'
            title={`Hai ${recipient}`}
         ></Header>
         <Flex
            flexDirection='column'
            flex={1}
            height='100vh'
            alignItems='center'
            bg='background'
         >
            <Flex
               width={[1, 1, 1 / 2, 1 / 3]}
               px={[4, 4, null, null]}
               mt={4}
               pb={7}
               flexDirection='column'
               sx={{
                  background: `url("/images/ayik-illust.svg") bottom center`,
                  backgroundSize: '200px',
                  backgroundRepeat: 'no-repeat',
               }}
            >
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
                  Salam hangat di hari yang fitri ini, <b>Ayik</b>.
               </Text>
            </Flex>
         </Flex>
      </>
   );
};

export default Greet;
