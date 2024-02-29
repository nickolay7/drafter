'use client';
import {useFormStatus} from "react-dom";
import {FC} from "react";

interface ButtonCustomProps {
    label: string;
    type: string;
    size?: string;
    [key: string]: any;
}
const ButtonCustom: FC<ButtonCustomProps> = ({ label, type, size, ...otherProps }) => {
    const {pending} = useFormStatus();

    return (
        <button { ...otherProps } type='submit' className={`btn btn-${type} btn-${size} join-item`} disabled={pending} >
            { pending ? 'please wait...' : label}
        </button>
    )
};

export default ButtonCustom;