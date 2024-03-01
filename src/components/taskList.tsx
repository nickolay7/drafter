'use client';
import Link from 'next/link';
import DeleteForm from "@/components/deleteForm";
import {useState} from "react";
import {Task} from "@prisma/client";
import ButtonsBlock from "@/components/buttonsBlock";

export enum TaskFilter {
    all = 'all',
    active = 'active',
    completed = 'completed'
}

export const enum SortBy {
    desc = 'desc',
    asc = 'asc'
}
const TaskList = ({ tasks = [] }: { tasks: Task[] }) => {
    const [filterBy, setFilterBy] = useState<TaskFilter>(TaskFilter.all);
    const [sortBy, setSortBy] = useState<SortBy>(SortBy.desc);

    const filteredTasks = tasks
        .filter(task => {
            if (filterBy === 'completed') {
                return task.completed;
            } else if (filterBy === 'active') {
                return !task.completed;
            } else {
                return true;
            }
        }).sort((a: Task, b: Task) => {
            if (sortBy === SortBy.desc ) {
                return a.createdAt.getTime() > b.createdAt.getTime() ? 1 : -1;
            } else if (sortBy === SortBy.asc) {
                return b.createdAt.getTime() > a.createdAt.getTime() ? 1 : -1;
            }

            return 0;
        });

    if (tasks.length === 0)
        return <h2 className='mt-8 font-medium text-lg'>No tasks to show</h2>;

    return (
        <>
            <div className='flex justify-between'>
                <ButtonsBlock
                    filterHandler={setFilterBy}
                    activeButton={filterBy}
                    config={
                        [TaskFilter.all, TaskFilter.active, TaskFilter.completed]
                    }
                />
                <ButtonsBlock
                    filterHandler={setSortBy}
                    activeButton={sortBy}
                    config={
                        [SortBy.asc, SortBy.desc]
                    }
                />
            </div>
            <ul className='mt-8'>
                {filteredTasks.map((task) => (
                    <li
                        key={task.id}
                        className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
                    >
                        <h2
                            className={`text-lg capitalize ${
                                task.completed ? 'line-through' : ''
                            }`}
                        >
                            {task.content + ' created: ' + task.createdAt.toLocaleDateString()}
                        </h2>
                        <div className='flex gap-6 items-center'>
                            <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
                                edit
                            </Link>
                            <DeleteForm id={task.id}/>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskList;
