import { mode, StyleFunctionProps} from '@chakra-ui/theme-tools';
import {extendTheme} from '@chakra-ui/react';

const styles = {
    global: (props: Record<string, any>) => ({
        body: {
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('gray.100', '#141214')(props),
        },
    }),
};

const components = {
    Drawer: {
        // setup light/dark mode component defaults
        baseStyle: (props: Record<string, any> | StyleFunctionProps) => ({
            dialog: {
                bg: mode('white', '#141214')(props),
            },
        }),
    },
};

const theme = extendTheme({
    components,
    styles,
});

export default theme;