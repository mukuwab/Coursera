# Installing Libraries

npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion formik yup @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons

@chakra-ui/react → UI components

formik → Form handling

yup → Validation schema

@fortawesome/react-fontawesome → Icons for social media and arrows



# Set up Chakra UI in index.js:

import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);