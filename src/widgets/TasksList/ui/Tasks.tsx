import {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "/src/entities/Task/model/selectors/getTasks";
import {Box, Button, Checkbox, Heading} from "@chakra-ui/react";
import {taskSlice} from "/src/entities/Task/model/slice/taskSlice";
import {Task} from "/src/entities/Task/model/types/task";

import styles from './TasksList.module.scss'

interface TasksProps {
    className?: string
}

export const Tasks = memo((props: TasksProps) => {

    const dispatch = useDispatch();
    let tasks = useSelector(getTasks)

    if (tasks.length === 0) {
        return (
            <div className={styles.error}>
                <Heading size="md">Задачи отсутствуют</Heading>
                <Heading size="md">Добавьте новую задачу!</Heading>
            </div>
        )
    }

    const deleteTask = (task: Task) => {
        console.log(task)
        dispatch(taskSlice.actions.deleteTask(task))
    }

    return (
        <div>
            {tasks.map((task) => {
                return (
                    <Box className={styles.Task} key={task.id} bg="#805AD5" color={"#fff"}>
                        <Checkbox
                            size={"lg"}
                        />
                        <span>{task.title}</span>
                        <Button onClick={() => deleteTask(task)} color="red">X</Button>
                    </Box>
                )
            })}
        </div>
    );
});