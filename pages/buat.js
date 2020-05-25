import { Input, Label, Select } from 'theme-ui';
import { Box, Button, Heading, Card, Flex, Image } from 'rebass';
import { useState } from 'react';
import NextLink from 'next/link';
import Header from '../components/Header';
import GenerateLayout from '../components/Layout/Generate';
import CharacterList from '../components/Character/CharacterList';
import { getListCharacter } from '../lib/characters';

const generate = ({ dataCharacter }) => {
   const [recipient, setRecipient] = useState('');
   const [sender, setSender] = useState('ayik');
   const [character, setCharacter] = useState('');

   const queryBuilder = () => {
      return {
         pathname: '/greet',
         query: {
            recipient: recipient,
            sender: sender,
            character: character !== '' ? character : getRandomCharacter().name,
            generated: true,
         },
      };
   };

   const getRandomCharacter = () => {
      const randomCharacter =
         dataCharacter[Math.floor(Math.random() * dataCharacter.length)];
      return randomCharacter;
   };

   return (
      <>
         <Header
            title='Buat salam'
            description='Buat salam ucapan hari raya'
         ></Header>
         <GenerateLayout>
            <Heading fontSize={4} mb={4}>
               Kirim-kirim salam
            </Heading>
            <Box Flex mb={4}>
               <Label>Untuk</Label>
               <Input
                  id='recipient'
                  name='recipient'
                  type='recipient'
                  placeholder='Misalnya Salehaw...'
                  onChange={(e) => setRecipient(e.target.value)}
               ></Input>
            </Box>
            <Box Flex mb={4}>
               <Label>Dari</Label>
               <Input
                  id='sender'
                  name='sender'
                  type='sender'
                  placeholder='Kamto e&...'
                  onChange={(e) => setSender(e.target.value)}
               ></Input>
            </Box>
            <Box Flex mb={4}>
               <Label>{`Karakter${
                  character !== '' ? ': ' + character : ''
               }`}</Label>
               <CharacterList
                  setCharacter={setCharacter}
                  dataCharacter={dataCharacter}
               />
            </Box>
            <Box Flex>
               {recipient !== '' ? (
                  <NextLink href={queryBuilder()}>
                     <Button width={1} variant='primary'>
                        Lihat ucapan
                     </Button>
                  </NextLink>
               ) : null}
            </Box>
         </GenerateLayout>
      </>
   );
};

export default generate;

export function getStaticProps() {
   const dataCharacter = getListCharacter();
   return {
      props: {
         dataCharacter,
      },
   };
}
