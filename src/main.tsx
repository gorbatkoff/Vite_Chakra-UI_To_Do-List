import './index.css'
import React from 'react'
import App from './app/App'
import ReactDOM from 'react-dom/client'
import {ProviderOfStore} from "/src/app/providers";
import {ChakraUIProvider} from "/src/app/providers/ThemeProvider";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ProviderOfStore>
        <ChakraUIProvider>
            <App/>
        </ChakraUIProvider>
    </ProviderOfStore>
)
