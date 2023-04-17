import {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Checkbox, Heading, useColorMode} from "@chakra-ui/react";
import {taskSlice} from "/src/entities/Task/model/slice/taskSlice";
import {Task} from "/src/entities/Task/model/types/task";

import styles from './TasksList.module.scss'
import {getCompletedTasks} from "/src/entities/Task/model/selectors/getCompletedTasks";
import {getUncompletedTasks} from "/src/entities/Task/model/selectors/getUncompletedTasks";

interface TasksProps {
    className?: string
    typeOfFilter: "uncompleted" | "completed";
}

export const Tasks = memo((props: TasksProps) => {

    const {typeOfFilter} = props;
    const dispatch = useDispatch();

    let tasks = useSelector(getUncompletedTasks)

    const deleteTask = (task: Task) => {
        dispatch(taskSlice.actions.deleteTask(task))
    }

    const toggleTask = (task: Task) => {
        dispatch(taskSlice.actions.toggleTask(task))
    }

    if (typeOfFilter === "completed") {
        tasks = useSelector(getCompletedTasks)
    }

    if (tasks.length === 0) {
        return (
            <div className={styles.error}>
                <Heading size="md">Задачи отсутствуют</Heading>
                <Heading size="md">Добавьте новую задачу!</Heading>
            </div>
        )
    }

    const {colorMode} = useColorMode();

    return (
        <div>
            {tasks.map((task: Task) => {
                return (
                    <Box className={styles.Task} key={task.id} bg="#805AD5" color={"#fff"}>
                        <Checkbox
                            isChecked={task.isCompleted}
                            size={"lg"}
                            onChange={() => toggleTask(task)}
                        />
                        <span>{task.title}</span>
                        <Button
                            onClick={() => deleteTask(task)}
                            color="red"
                        >
                            X
                        </Button>
                    </Box>
                )
            })}
        </div>
    );
});