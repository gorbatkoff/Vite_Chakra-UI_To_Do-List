import {memo} from "react";
import styles from "./Header.module.scss";
import {Heading} from "@chakra-ui/react";
import {ThemeSwitcher} from "/src/shared/ui/ThemeSwitcher/ThemeSwitcher";

interface HeaderProps {
    className?: string
}


export const Header = memo(({className}: HeaderProps) => {

    return (
        <header className={styles.Header}>
            <Heading size='xl'>тасколист</Heading>
            <ThemeSwitcher/>
        </header>
    );
});