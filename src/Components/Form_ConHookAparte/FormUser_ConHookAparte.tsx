import { useFormHook } from '../../Hooks/useFormHook'

interface User {
    name: string,
    email: string,
    producto: number,
    redSocial: string,
    password: string
}

export const FormUser_ConHookAparte = () => {
    // const initialForm = {
    //     name: '',
    //     email: '',
    //     producto: '',
    //     redSocial: '',
    //     password: ''
    // }
    //const { Form, onInputChange, resetForm } = useFormHook<User>(initialForm)
    const { Form, onInputChange, resetForm } = useFormHook<User>({
        name: '',
        email: '',
        producto: 0,
        redSocial: '',
        password: ''
    })
    //const {name , email , password} = Form
    //esto tambien se puede desestructurar si queremos, en el value ya solo seria name y no Form.name


    const ShowUser = (e: React.FormEvent) => {
        e.preventDefault()
        const emptyFields = Object.entries(Form) //-> Convierte el objeto del formulario a un array de pares [clave, valor].
        /* // Object.entries(Form) ⇒
            [
            ['name', ''],
            ['email', 'juan@mail.com'],
            ['password', '']
            ]*/

            .filter(([_, value]) => value === '' || value === null || value === undefined)
            /*
            ([_, value]) → estás ignorando la clave y usando solo el valor.
            ([key, value]) → usas ambos, clave y valor. 
            */
            .map(([key]) => key);
            //Después del filter, te quedas solo con los campos vacíos:
            //Recorre cada par [key, value], pero te interesa solo la clave (key), así que la desestructuras directamente.
            //Nos queda un array con solo los nombres de los campos vacíos.
            //y es util para luego hacer la siguiente condicional.
        if (emptyFields.length > 0) {
            alert(`Los siguientes campos están vacíos: ${emptyFields.join(', ')}`);
            return;
        }
        console.log(Form)
        resetForm();//Es opcional para que se limpie el input
    }
    return (
        <form action="" className="form-sombra" onSubmit={ShowUser}>
            <h1>Este es el formulario</h1>
            <div className="form-group">
                <label>Name User</label>
                <input type="text" placeholder='Escribe aqui' name="name" id="name" value={Form.name}
                    onChange={onInputChange} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" placeholder='Escribe aqui' name="email" id="email" value={Form.email}
                    onChange={onInputChange} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="number" placeholder='Escribe aqui' name="producto" id="producto" value={Form.producto}
                    onChange={onInputChange} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" placeholder='Escribe aqui' name="redSocial" id="redSocial" value={Form.redSocial}
                    onChange={onInputChange} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder='Escribe aqui' name="password" id="password" value={Form.password}
                    onChange={onInputChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}