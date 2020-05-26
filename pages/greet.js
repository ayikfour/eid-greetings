import { Heading, Text, Button, Link } from 'rebass';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import GreetLayout from '../components/Layout/Greet';
import queryString from 'query-string';
import { toast } from 'react-toastify';

const Greet = () => {
   const router = useRouter();
   const { recipient, sender, character, generated } = router.query;

   const getUrl = () => {
      const windowUrl = window.location.href.split('&');
      windowUrl.pop();
      const newUrl = windowUrl.join('&');
      return newUrl;
   };

   const handleClick = async () => {
      const url = getUrl();

      // const el = document.createElement('textarea');
      // el.value = url;
      // el.readOnly = true;
      // document.body.appendChild(el);
      // el.select();
      // document.execCommand('copy');
      // document.body.removeChild(el);

      copyToClipboard(url);
      toast('Tautan berhasil disalin!', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   const copyToClipboard = (textToCopy) => {
      var textArea;

      function isOS() {
         //can use a better detection logic here
         return navigator.userAgent.match(/ipad|iphone/i);
      }

      function createTextArea(text) {
         textArea = document.createElement('textArea');
         textArea.readOnly = true;
         textArea.contentEditable = true;
         textArea.value = text;
         document.body.appendChild(textArea);
      }

      function selectText() {
         var range, selection;

         if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
         } else {
            textArea.select();
         }
      }

      function copyTo() {
         document.execCommand('copy');
         document.body.removeChild(textArea);
      }

      createTextArea(textToCopy);
      selectText();
      copyTo();
   };

   return (
      <>
         <Header
            description={`New message from ${sender}`}
            title={`Hai ${recipient}`}
         ></Header>
         <GreetLayout illustration={character}>
            <Heading as='h1' py={5}>{`Halo ${recipient}!`}</Heading>
            <Text as='p' mb={4}>
               Apa kabar? Mungkin suasana lebaran kali ini sedikit berbeda
               dengan tahun-tahun sebelumnya, aku harap kamu ✨baik-baik saja
               dan sehat selalu✨.
            </Text>
            <Text as='p' mb={4}>
               aku mohon maaf ya jika selama ini pernah berbuat salah. Baik
               salah yang aku sengaja maupun tidak 🙏🏻
            </Text>
            <Text as='p' mb={4}>
               Meskipun belum bisa bertemu karena kondisi ini, aku harap kita
               tetap dapat tetap berkomunikasi.
            </Text>
            <Text as='p' mb={4}>
               Dan tidak lupa, <b>selamat Hari Raya Idul Fitri 1441 H</b> 🕌
            </Text>
            <Text as='p' mb={4}>
               Salam hangat di hari yang fitri ini, <b>{sender}</b>.
            </Text>
            {generated ? (
               <>
                  <Button mb={3} onClick={handleClick}>
                     Salin tautan
                  </Button>
               </>
            ) : null}
         </GreetLayout>
      </>
   );
};

export default Greet;
