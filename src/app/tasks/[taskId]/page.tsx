import { getTaskById } from "@/utils/actions";
import EditForm from "@/components/editForm";
import Link from "next/link";
const Page = async ({ params }: { params: { taskId: string } }) => {
    const task = await getTaskById(params.taskId);

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <>
            <div className='mb-16'>
                <Link href='/tasks' className='btn btn-accent'>
                    Back to Tasks
                </Link>
            </div>
            <EditForm task={task} />
        </>
    )
}

export default Page;