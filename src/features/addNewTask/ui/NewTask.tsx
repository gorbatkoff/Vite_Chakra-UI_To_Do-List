import {ChangeEvent, memo, useState} from "react";
import styles from "./NewTask.module.scss";
import {Button, Input} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {Task} from "/src/entities/Task/model/types/task";
import {v4} from 'uuid';
import {taskActions, taskSlice} from "/src/entities/Task/model/slice/taskSlice";
import {getTasks} from "/src/entities/Task/model/selectors/getTasks";

interface NewTaskProps {
    className?: string
}

export const NewTask = memo(({className}: NewTaskProps) => {
    const dispatch = useDispatch();
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [isInvalid, setIsInvalid] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value);
    }

    const handleClick = () => {

        const newTask: Task = {
            id: v4(),
            title: taskTitle,
            isCompleted: false
        }
        dispatch(taskSlice.actions.addTask(newTask))

        return setTaskTitle("");
    }

    return (
        <>
            <div className={styles.NewTask}>
                <Input
                    isInvalid={isInvalid}
                    value={taskTitle}
                    onChange={e => handleChange(e)}
                    placeholder="New task ..."
                />
                <Button
                    colorScheme="purple"
                    onClick={() => handleClick()}
                >
                    Добавить
                </Button>
            </div>
        </>
    );
});