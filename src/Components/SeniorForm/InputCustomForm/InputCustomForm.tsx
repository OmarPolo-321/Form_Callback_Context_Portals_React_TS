// SI usa controller
// import { type Control, type FieldError, Controller } from "react-hook-form"; 
import {type FormValues } from '../modelSchema'

import {type  FieldError, type UseFormRegister } from "react-hook-form";

// interface Props {
//     name: string;
//     control: Control<any>;
//     label: string;
//     type?: string;
//     error?: FieldError;
// }
interface Props {
    name: keyof FormValues;
    register: UseFormRegister<FormValues>;
    label: string;
    type?: string;
    error?: FieldError;
}
//export const InputForm = ({ name, control, label, type, serror }: Props) => {
export const InputForm = ({ name, register, label, type, error }: Props) => {
    return (
        //Usando el Controller
        // <div className="form-group" >
        //     <label htmlFor={name}>{label}</label>
        //     <Controller
        //         name={name}
        //         control={control}
        //         render={({ field }) =>
        //             <input id={name} type={type} {...field}
        //                 className={`form-control ${error ? "is-invalid" : ""}`} />}
        //     />
        //     {error && <p className='error'>{error.message}</p>}
        // </div>

        // Usando el Register
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                {...register(name)}
                className={`form-control ${error ? "is-invalid" : ""}`}
            />
            {error && <p className="error">{error.message}</p>}
        </div>
    )
}