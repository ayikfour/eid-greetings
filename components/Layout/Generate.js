import { Flex } from 'rebass';

const Generate = ({ children }) => {
   return (
      <Flex
         flexDirection='column'
         flex={1}
         justifyContent='center'
         alignItems='center'
         bg='background'
      >
         <Flex
            width={[1, 1, 1 / 2, 1 / 3]}
            px={[4, 4, null, null]}
            minHeight={'100vh'}
            flexDirection='column'
            my={6}
         >
            {children}
         </Flex>
      </Flex>
   );
};

export default Generate;
