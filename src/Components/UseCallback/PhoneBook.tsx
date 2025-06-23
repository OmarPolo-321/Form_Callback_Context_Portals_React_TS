// objectivo: se utiliza para memorizar una instancia de una función
// hace que un hijo no renderice

import { memo, useCallback, useState } from "react";

// Ejemplo:
// Supongamos que tenés un número de teléfono al que llamas con frecuencia
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos del teléfono
// A menos el número cambie siempre utilizo el mismo contacto.

interface Contact {// Definimos lo que debe tener un Contacto
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact
  onCall: (phone: string) => void
}
// Uso del memo() para evitar el re-render del componente si sus pros no han cambiado. Aqui el ContactCard solo se re-renderiza si cambia el contact o onCall especifico 
const ContactCard = memo(({ contact, onCall }: ContactProps) => {//Usas el memo no el useMemo
  //El memo se usa en componentes y evita el re-render innecesario de un componente si sus props no cambian
  console.log(`Renderizando contacto ${contact.name}`)

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Teléfono: {contact.phone}</p>
      <button onClick={() => onCall(contact.name)}>Llamar</button>
    </div>
  )
})

export const PhoneBook = () => {
  const [log, setLog] = useState<string>('') // Cadena que se actualiza cuando haces clic en "Llamar"

  const [contacts, setContacts] = useState<Contact[]>([{
    id: 1, name: "Manzana", phone: "123-456-7890"
  },
  {
    id: 2, name: "Pera", phone: "123-456-7890"
  },
  {
    id: 3, name: "Leche", phone: "123-456-7890"
  }
  ]);

  const makeCall = useCallback((name: string) => setLog(`Llamando al ${name}`), [])
  // Devuelve un funcion memorizada, es decir no se vuelve a crear cada vez que el componente se renderiza.
  //Esto evita que se rompa la optimización con memo() ya que si onCall cambiara, entonces el ContactCard se re-renderiza

  const addContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `${Math.floor(10000000000 + Math.random() * 9000000000)}`,
    }

    setContacts([...contacts, newContact])
  }

  //Aqui se renderiza el ContactCard por cada contacto
  //Gracias a memo() y useCallback() solo los nuevos contactos o los que cambien se re-renderizan
  return (
    <div>
      <h2>Agenda de Contacto</h2>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}
      <button onClick={addContact}>Agregar Contacto</button>
      <p>{log}</p>
    </div>
  )
} 