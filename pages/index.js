import Code from '../components/code';
import { Box, Flex, Heading, Button } from 'rebass';
import Router from 'next/router';

const handler = () => {
   Router.push('/buat');
};

const Home = () => {
   return (
      <Flex
         flexDirection='column'
         flex={1}
         justifyContent='center'
         alignItems='center'
         bg='primary'
      >
         <Flex
            width={[1, 1, 1 / 3, 1 / 4]}
            height={'100vh'}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
         >
            <Button mb={3} onClick={handler} variant='secondary'>
               Kirim-kirim
            </Button>
         </Flex>
      </Flex>
   );
};

export default Home;
