'use client';

import ButtonCustom from "@/components/buttonCustom";
import {FC} from "react";
import {TaskFilter} from "@/components/taskList";

interface TasksFilterProps {
    filterHandler: (filter: TaskFilter) => void;
    activeFilter: TaskFilter;
}
const TasksFilter: FC<TasksFilterProps> = ({filterHandler, activeFilter}) => {
    const filterConfig: TaskFilter[] = [TaskFilter.all, TaskFilter.active, TaskFilter.completed];
    const activeButton = (label: TaskFilter) => activeFilter === label ? 'accent' : 'info';

    return (
        <div className='join my-3 shadow-lg'>
            {
                filterConfig.map((filter) => (
                    <ButtonCustom
                        key={filter}
                        onClick={() => filterHandler(filter)}
                        label={filter}
                        type={activeButton(filter)}
                        size="sm"/>
                ))
            }
        </div>
    );
}

export default TasksFilter;
