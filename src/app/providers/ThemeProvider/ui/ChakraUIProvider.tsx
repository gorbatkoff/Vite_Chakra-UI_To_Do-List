import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {ReactNode} from "react";

interface ChakraUIProviderProps {
    className?: string;
    children: ReactNode;
}

export const ChakraUIProvider = (props: ChakraUIProviderProps) => {

    const {children} = props;

    const light = {
        brand: {
            900: '#ededed',
            800: '#153e75',
            700: '#2a69ac',
        },
    }

    const night = {
        brand: {
            900: '#262626',
            800: '#3e3e3e',
            700: '#5aaca4',
            100: '#ffffff',
        },
    }

    const theme = extendTheme({light, night})

    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>

    );
};