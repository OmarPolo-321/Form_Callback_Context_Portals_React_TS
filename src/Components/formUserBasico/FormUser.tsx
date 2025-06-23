import { useState } from "react"
interface FormData {
    name: string;
    email: string;
    password: string;
}

export const FormUser = () => {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });
    const ShowUser = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <form action="" className="form-sombra" onSubmit={ShowUser}>
            <h1>Este es el formulario</h1>
            <div className="form-group">
                <label>Name User</label>
                <input type="text" name="name" id="name" value={form.name} onChange={onInputChange} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" id="email" value={form.email} onChange={onInputChange} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" id="password" value={form.password} onChange={onInputChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}