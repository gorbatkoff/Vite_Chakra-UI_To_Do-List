import {memo} from "react";
import {FormControl, FormLabel, Heading, Switch, useColorMode} from "@chakra-ui/react";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <div>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='theme-switcher' mb='0'>
                    <Heading size='sm'>
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
    );
});