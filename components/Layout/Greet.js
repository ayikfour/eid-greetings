import { Flex } from 'rebass';

const Greet = ({ children, illustration }) => {
   return (
      <Flex flexDirection='column' flex={1} alignItems='center' bg='background'>
         <Flex
            width={[1, 1, 2 / 3, 1 / 3]}
            px={[4, 4, null, null]}
            mt={4}
            pb={7}
            minHeight='100vh'
            flexDirection='column'
            sx={{
               background: `url("/images/characters/${illustration}.svg") bottom center`,
               backgroundSize: '200px',
               backgroundRepeat: 'no-repeat',
            }}
         >
            {children}
         </Flex>
      </Flex>
   );
};

export default Greet;
