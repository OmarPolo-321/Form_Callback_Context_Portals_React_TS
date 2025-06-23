import { z } from 'zod'
export const schema = z.object({
    //.optional() -> Si es opcional se puede poner este
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Correo invalido").min(1, "El correo es oligatorio"),
    password: z.string().min(6, "La contraseña debe de tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmación debe tener al menos 6 caracteres")
    /*
    .refine() -> Permite validar todo el objeto completo, no solo un campo
    Comparamos el password y confirmPassword.
    path -> Especificamose en que campo mostrar el error
    */
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas son diferentes",
    path: ['confirmPassword']
})
/*Inferimos el tipo del schem
y generamos un tipado de TS*/
export type FormValues = z.infer<typeof schema>