import fs from 'fs';
import path from 'path';

const characterDirectory = path.join(process.cwd(), 'public/images/characters');

const slugify = (string = '') => {
   return string
      .replace(/\.svg$/, '') //replace the extention
      .toString() // Cast to string
      .toLowerCase() // Convert the string to lowercase letters
      .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
      .trim() // Remove whitespace from both sides of a string
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

export function getListCharacter() {
   const fileNames = fs.readdirSync(characterDirectory);
   return fileNames.map((fileName) => {
      // Remove ".svg" and invalid char from file name to get slug
      const characterName = slugify(fileName);
      const path = `/images/characters/${fileName}`;
      return { name: characterName, path: path };
   });
}

export function getRandomCharacter() {
   const listCharacter = getListCharacter();
   const randomCharacter =
      listCharacter[Math.floor(Math.random() * listCharacter.length)];
   return randomCharacter;
}
