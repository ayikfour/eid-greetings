import { Flex, Box, Image, Heading, Button } from 'rebass';

const CharacterList = ({ setCharacter, dataCharacter }) => {
   return (
      <Flex flexWrap='wrap' mx={-2}>
         {dataCharacter.map((character, index) => {
            return (
               <Box width={1 / 2} p={2}>
                  <Button
                     id={character.name}
                     key={index}
                     data-path={character.path}
                     onClick={(e) => {
                        setCharacter(e.currentTarget.id);
                     }}
                     width={1}
                     maxHeight='100%'
                     maxWidth='100%'
                     height='160px'
                     sx={{
                        display: 'flex',
                        cursor: 'pointer',
                        border: 1,
                        borderRadius: 4,
                        borderColor: 'primary',
                        borderStyle: 'solid',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        background: `url(${character.path}) center center`,
                        backgroundSize: '160px',
                        backgroundRepeat: 'no-repeat',
                        objectFit: 'cover',
                        '&.selected,:hover,:focus': {
                           borderColor: 'primary',
                           boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
                           outline: 'none',
                        },
                     }}
                  ></Button>
               </Box>
            );
         })}
      </Flex>
   );
};

export default CharacterList;
