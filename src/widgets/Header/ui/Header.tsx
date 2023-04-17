import {memo} from "react";
import styles from "./Header.module.scss";
import {Button, FormControl, FormLabel, Heading, Switch, useColorMode} from "@chakra-ui/react";

interface HeaderProps {
    className?: string
}


export const Header = memo(({className}: HeaderProps) => {

    const {colorMode, toggleColorMode} = useColorMode();

    console.log(colorMode)

    return (
        <header className={styles.Header}>
            <Heading size='xl'>тасколист</Heading>

            <div>
                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='theme-switcher' mb='0'>
                        <Heading size='md'>
                            {colorMode === "dark" ? "Включить свет" : "Выключить свет"}
                        </Heading>
                    </FormLabel>
                    <Switch
                        colorScheme='purple'
                        onChange={toggleColorMode}
                        id='theme-switcher'
                        size='md'/>
                </FormControl>
            </div>
        </header>
    );
});