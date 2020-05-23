import { Flex, Text, Box, Link, Button } from 'rebass';
import { useColorMode } from 'theme-ui';

export default function Navbar() {
   const [mode, setMode] = useColorMode();

   const handleClick = (e) => {
      const nextMode = mode === 'dark' ? 'light' : 'dark';
      setMode(nextMode);
   };

   return (
      <Flex
         px={['1em', '2em', '4em']}
         pt={'2em'}
         color='primary'
         bg='white'
         alignItems='center'
      >
         <Text p={2} fontWeight='bold' color='primary' display='flex'>
            キツネ
         </Text>
         <Box mx='auto' />
         <Link variant='nav' href='#!'>
            Thought
         </Link>
         <Button onClick={handleClick} variant='outline' ml={2}>
            {mode === 'dark' ? 'Dark' : 'Light'}
         </Button>
      </Flex>
   );
}
