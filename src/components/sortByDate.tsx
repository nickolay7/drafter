'use client';

import ButtonCustom from "@/components/buttonCustom";
import {FC} from "react";
import {SortBy} from "@/components/taskList";

interface TasksFilterProps {
    sortHandler: (range: SortBy) => void;
    activeSort: SortBy;
}
const TasksFilter: FC<TasksFilterProps> = ({sortHandler, activeSort}) => {
    const sortByConfig = [SortBy.asc, SortBy.desc];
    const activeButton = (label: SortBy) => activeSort === label? 'accent' : 'info';

    return (
        <div className='join my-3 shadow-lg'>
                {
                    sortByConfig.map((sortBy) => (
                        <ButtonCustom
                            key={sortBy}
                            onClick={() => sortHandler(sortBy)}
                            label={sortBy}
                            type={activeButton(sortBy)}
                            size="sm"/>
                    ))
                }
        </div>
    );
}

export default TasksFilter;
