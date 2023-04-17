import {ChangeEvent, memo, useEffect, useState} from "react";
import styles from "./Content.module.scss";
import {Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea, useTheme} from "@chakra-ui/react";
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

    return (
        <div className={styles.Content}>
            <div>
                <Heading size='lg'>таски</Heading>

                <NewTask/>

                <Tabs isFitted variant='enclosed' className={styles.tabList}>
                    <TabList mb='1em'>
                        <Tab>Невыполненные</Tab>
                        <Tab>Выполненные</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Tasks  typeOfFilter="uncompleted"/>
                        </TabPanel>
                        <TabPanel>
                            <Tasks  typeOfFilter="completed"/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

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