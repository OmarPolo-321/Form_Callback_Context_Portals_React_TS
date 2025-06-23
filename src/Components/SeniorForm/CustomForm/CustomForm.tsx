import { zodResolver } from '@hookform/resolvers/zod'
import { /*Controller,*/ useForm, type SubmitHandler } from 'react-hook-form'
import { InputForm } from '../InputCustomForm'
import { schema, type FormValues } from '../modelSchema'


//Generamos el Formulario
export const CustomForm = () => {
    // Si Usamos el Register seria de esta forma
      const {register,handleSubmit,formState: { errors },} = useForm<FormValues>({
        resolver: zodResolver(schema),
        //     defaultValues: {
        //     name: "",
        //     email: "",
        //     password: "",
        //     confirmPassword: ""
        // }
        mode:"onBlur", //Se validar por primera vez al desenfocar
        reValidateMode:"onChange" // Luego se revalida cada vez que escribe puede afectar el rendimiento xq lo hace por cada tecla introducida
      });


    //Desestructuración del Hook useForm de react-hook-form
    /*
    control->se utiliza para inputs controlados cuando usas <Controller>
    handleSubmit -> Es una fución envolvente que valida el formulario y luego llama a la funcion onSubmit
    formState: { errors } -> El objeto con los errores de validación por campo
     */
    // const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    //     resolver: zodResolver(schema),
    //     defaultValues: {
    //         name: "",
    //         email: "",
    //         password: "",
    //         confirmPassword: ""
    //     }
    // });

    // const onSubmit = (data: FormValues) => {
    // console.log(data);
    // };
    /*Otra forma de tiparlo el submit
    Es mejor por que lo asociamos con el metodo handleSubmit osea que ejectute un metodo nuestro
    aprovechamos el tipado SubmitHandler que ofrece React Hook Form.*/
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-sombra">
            <h1>Formulario de Inscripción</h1>

            {/* Para el Controller
            <InputForm name="name" control={control} label='Name' type='text' error={errors.name}></InputForm>
            <InputForm name="email" control={control} label='Email' type='email' error={errors.email}></InputForm>
            <InputForm name="password" control={control} label='Password' type='text' error={errors.password}></InputForm>
            <InputForm name="confirmPassword" control={control} label='Confirm Password' type='text' error={errors.confirmPassword}></InputForm> */}
            
            {/* Para el Register */}
            <InputForm name="name" register={register} label='Name' type='text' error={errors.name}></InputForm>
            <InputForm name="email" register={register} label='Email' type='email' error={errors.email}></InputForm>
            <InputForm name="password" register={register} label='Password' type='text' error={errors.password}></InputForm>
            <InputForm name="confirmPassword" register={register} label='Confirm Password' type='text' error={errors.confirmPassword}></InputForm>
            <button type="submit">Submit</button>
        </form >
    )
}