import {memo} from "react";
import styles from "./Header.module.scss";
import {Heading} from "@chakra-ui/react";

interface HeaderProps {
    className?: string
}

export const Header = memo(({className}: HeaderProps) => {

    return (
        <header className={styles.Header}>
            <Heading size='xl'>тасколист</Heading>
        </header>
    );
});