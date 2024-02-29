import {deleteTask} from "@/utils/actions";
import ButtonCustom from "@/components/buttonCustom";

const DeleteForm = ({ id }: { id: string }) => {

    return (
        <form action={deleteTask}>
            <input type='hidden' name='id' value={id} />
            <ButtonCustom label="delete" type="error" size="xs"/>
        </form>
    );
}

export default DeleteForm;