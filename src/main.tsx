import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import App from './app/App'
import './index.css'
import {ProviderOfStore} from "/src/app/providers";

const light = {
    brand: {
        900: '#141414',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const night = {
    brand: {
        900: '#262626',
        800: '#123e75',
        700: '#5aaca4',
        100: '#ffffff',
    },
}

const theme = extendTheme({light, night})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ProviderOfStore>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </ProviderOfStore>
)
