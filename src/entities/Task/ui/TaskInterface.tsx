import {memo} from "react";
import {Task} from "/src/entities/Task/model/types/task";
import {Button, Checkbox, Heading} from "@chakra-ui/react";

import styles from './TaskInterface.module.scss'

interface TaskInterfaceProps {
    className?: string;
    task: Task;
}

export const TaskInterface = memo((props: TaskInterfaceProps) => {

    const {task} = props;

    return (
        <div className={styles.Task}>
            <Checkbox
                size={"lg"}
            />
            <span>{task.title}</span>
            <Button color="red">X</Button>
        </div>
    );
});