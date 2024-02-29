import {ReactNode} from "react";
import {Toaster} from "react-hot-toast";

const Providers = ({children}: {children: ReactNode}) => (
    <>
        <Toaster />
        {children}
    </>
);

export default Providers;