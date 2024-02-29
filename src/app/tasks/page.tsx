import TaskList from "@/components/taskList";
import TaskFormCustom from "@/components/taskFormCustom";
import {getAllTasks} from "@/utils/actions";
// export const dynamic = 'force-dynamic';

const TasksPage = async () => {
    const tasks = await getAllTasks();

    return (
        <div className='max-w-lg mx-auto'>
            <TaskFormCustom />
            <TaskList tasks={tasks}/>
        </div>
    );
}

export default TasksPage;