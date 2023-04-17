import {StateSchema} from "/src/app/providers/ProviderOfStore/config/StateSchema";
import {Task} from "/src/entities/Task/model/types/task";

export const getUncompletedTasks = (state: StateSchema) => state.tasks.filter((task: Task) => {
    return !task.isCompleted;
})