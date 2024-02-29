'use client';
import {updateTask} from "@/utils/actions";
import {useState} from "react";
import ButtonCustom from "@/components/buttonCustom";
interface Task {
    id: string;
    content: string;
    createdAt: Date;
    completed: boolean;
}
const EditForm = ({ task }: { task: Task }) => {

    return(
        <form
            action={updateTask}
            className='max-w-sm bg-base-100 p-12 border border-base-300  rounded-lg'
        >
            <input
                type="hidden"
                name="id"
                value={task.id}
            />

            {/* content */}
            <input
                className='input input-bordered w-full'
                type="text"
                name="content"
                defaultValue={task.content}
                required
            />

            {/* completed */}
            <div className='form-control my-4'>
                <label className='label cursor-pointer'>
                    <span className='label-text'>Completed</span>
                    <input
                        type='checkbox'
                        defaultChecked={task.completed}
                        name='completed'
                        className='checkbox checkbox-primary checkbox-sm'
                    />
                </label>
            </div>

            <ButtonCustom label="edit" type="primary" size="sm btn-block" />
        </form>
    );
}
export default EditForm;