'use server';

import prisma from "@/utils/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {z} from "zod";

export const getAllTasks = () => {

    return prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
};

export const createTask = async (prevState: { message: string | null }, formData: FormData) => {
    // искусственная задержка, чтобы увидеть, что запрос проходит
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const content = formData.get('content') as string;
    const Task = z.object({
        content: z.string().min(5),
    });
    // some validation here
    try {
        Task.parse({
            content,
        });
        await prisma.task.create({
            data: {
                content,
            },
        });
        // revalidate path
        revalidatePath('/tasks');

        return {message: 'success'}
    } catch (e) {
        return {message: 'error'}
    }

};

export const deleteTask = async (formData: FormData) => {
    // искусственная задержка, чтобы увидеть, что запрос проходит
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const id = formData.get('id') as string;

    await prisma.task.delete({
        where: {
            id,
        },
    });
    // revalidate path
    revalidatePath('/tasks');
};

export const getTaskById = (id: string) => {
    return prisma.task.findUnique({
        where: {
            id,
        },
    });
};

export const updateTask = async (formData: FormData) => {
    const id = formData.get('id') as string;
    const content = formData.get('content') as string;
    const completed = formData.get('completed');

    await prisma.task.update({
        where: {
            id,
        },
        data: {
            content,
            completed: completed === 'on' ? true : false,
        },
    });

    redirect('/tasks');
};