import {ChangeEvent, memo, useEffect, useState} from "react";
import styles from "./Content.module.scss";
import {Heading, Textarea, useTheme} from "@chakra-ui/react";
import {NewTask} from "/src/features";
import {Tasks} from "/src/widgets/TasksList/ui/Tasks";

interface ContentProps {
    className?: string
}

export const Content = memo((props: ContentProps) => {

    const localNotes = localStorage.getItem("note");
    const [notes, setNotes] = useState(localNotes);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        localStorage.setItem("note", e.target.value);
        setNotes(e.target.value);
    };

    const theme = useTheme();

    return (
        <div className={styles.Content}>
            <div>
                <Heading size='lg'>таски</Heading>

                <NewTask/>

                <Tasks />
            </div>
            <div>
                <Heading size='lg'>лист</Heading>

                <Textarea
                    borderColor={"#805AD5"}
                    value={notes as string}
                    onChange={handleChange}
                    height={"70vh"}
                    p={6}
                    placeholder={"Write new text here ..."}
                />
            </div>
        </div>
    );
});