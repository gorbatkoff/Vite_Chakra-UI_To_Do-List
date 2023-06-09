import {ChangeEvent, KeyboardEvent, memo, useState} from "react";
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

        if (taskTitle.length === 0 || taskTitle === "" || taskTitle === " ") {
            setIsInvalid(true)
            return;
        }

        if (taskTitle.trim().length === 0) {
            setIsInvalid(true)
            return;
        }

        setIsInvalid(false)

        const newTask: Task = {
            id: v4(),
            title: taskTitle,
            isCompleted: false
        }
        dispatch(taskSlice.actions.addTask(newTask))

        return setTaskTitle("");
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") handleClick()
    }

    return (
        <>
            <div className={styles.NewTask}>
                <Input
                    borderColor={"#805AD5"}
                    isInvalid={isInvalid}
                    value={taskTitle}
                    onChange={e => handleChange(e)}
                    placeholder="New task ..."
                    onKeyDown={e => handleKeyDown(e)}
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