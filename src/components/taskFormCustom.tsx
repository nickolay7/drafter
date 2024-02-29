'use client';
import {createTask} from "@/utils/actions";
import {useFormState } from "react-dom";
import {useEffect} from "react";
import toast from "react-hot-toast";
import ButtonCustom from "@/components/buttonCustom";

const initialState = {
    message: null,
}

const TaskForm = () => {
    const [state, formAction] = useFormState<{message: string | null}, FormData>(createTask, initialState);

    useEffect(() => {
        if (state.message === 'error') {
            toast.error('there was an error');
            return;
        }
        if (state.message) {
            toast.success('task created...');
        }
    }, [state]);

    return (
        <form action={formAction}>
            <div className='join w-full'>
                <input
                    className='input input-bordered join-item w-full'
                    placeholder='Type Here'
                    type='text'
                    name='content'
                    required
                />
                <ButtonCustom label="create task" type="primary" />
            </div>
        </form>
    );
};
export default TaskForm;