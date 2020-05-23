import Code from '../components/code';
import { Box, Flex, Heading } from 'rebass';

function Home() {
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
            <Heading color='background'>Nani kore</Heading>
         </Flex>
      </Flex>
   );
}

export default Home;
