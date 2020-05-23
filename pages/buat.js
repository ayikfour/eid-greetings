import { Input, Label, Link } from 'theme-ui';
import { Flex, Box, Button } from 'rebass';
import { useState } from 'react';
import NextLink from 'next/link';
import btoa from 'btoa';
import Header from '../components/Header';

const generate = () => {
   const [recipient, setRecipient] = useState('');

   const handleClick = async (e) => {
      const url = window
         ? window.location.hostname + `/greet/${btoa(recipient)}`
         : '';
      await navigator.clipboard.writeText(url);
   };

   return (
      <>
         <Header
            title='Buat salam'
            description='Buat salam ucapan hari raya'
         ></Header>
         <Flex
            flexDirection='column'
            flex={1}
            justifyContent='center'
            alignItems='center'
            bg='background'
         >
            <Flex
               width={[1, 1, 1 / 3, 1 / 4]}
               height={'100vh'}
               flexDirection='column'
               justifyContent='center'
            >
               <Box Flex mb={3}>
                  <Label>Kanggo</Label>
                  <Input
                     id='recipient'
                     name='recipient'
                     type='recipient'
                     placeholder='Bajuri...'
                     onChange={(e) => setRecipient(e.target.value)}
                  ></Input>
               </Box>
               <Box Flex>
                  {recipient !== '' ? (
                     <Flex flexDirection='row'>
                        <NextLink
                           href='/salam/[salam]'
                           as={`/salam/${btoa(recipient)}`}
                        >
                           <Button variant='primary'>Lihat ucapan</Button>
                        </NextLink>
                        <Button variant='outline' ml={2} onClick={handleClick}>
                           Salin
                        </Button>
                     </Flex>
                  ) : null}
               </Box>
            </Flex>
         </Flex>
      </>
   );
};
export default generate;
