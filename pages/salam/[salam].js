import { Flex } from 'rebass';
import { Heading, Text } from 'theme-ui';
import { useRouter } from 'next/router';
import atob from 'atob';
import Header from '../../components/Header';

const Salam = () => {
   const router = useRouter();
   const salam = router.query?.salam;
   const recipient = salam ? atob(salam) : '';

   return (
      <>
         <Header
            description='Surat anyar: Ayik'
            title={`Halo mbut ${recipient}`}
            og='https://arifeka.now.sh/images/og/twitter-jowo-og.png'
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
               mb={4}
               flexDirection='column'
            >
               <Heading as='h1' py={5}>{`Halo ${recipient}!`}</Heading>

               <Text as='p' mb={4}>
                  Piye cok kabare? wuajur mbut riyoyo taun iki raiso ketemuan
                  blas. Raiso mangani jajanmu ngeneki. Mugo mugo sehat terus
                  masio raiso metu omah 👊
               </Text>
               <Text as='p' mb={4}>
                  Mergo raiso ketemu, yowes nang kene wae. Ngapunten ingkang
                  katah yo lek tau nggae salah. Sing tak sengojo opo ora 🙏🏻
               </Text>
               <Text as='p' mb={4}>
                  Manungso akeh salahe, sing raonok salahe mung ––yo kuwi––.
               </Text>
               <Text as='p' mb={4}>
                  Yowes,<b>Ngaturaken sugeng riyadi 1 Syawwal 1441 H</b> 🕌
               </Text>
               <Text as='p' mb={4}>
                  Shalom, <b>Ayik</b>.
               </Text>
            </Flex>
         </Flex>
      </>
   );
};

export default Salam;
