import { useState } from "react";


export const useFormHook = <T extends Record<string, any>>(initialForm: T) => {
    const [Form, setForm] = useState(initialForm)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));

    };
    const resetForm = () => setForm(initialForm);
    return {
        Form,
        onInputChange,
        resetForm
    };
};